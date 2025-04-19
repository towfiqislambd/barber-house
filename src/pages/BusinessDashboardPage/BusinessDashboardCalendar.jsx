import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  NextArrowIcon,
  PrevArrorIcon,
  FilterSvg,
  GroupSvg,
  ReloadIconSvg,
  DropdownSvg,
  DayViewSvg,
  ThreeDayViewSvg,
  WeekViewSvg,
  MonthViewSvg,
  CalendarSvg,
  AllFilter,
} from "@/components/svgContainer/SvgContainer";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import BlockedTimeModal from "@/components/BusinessDashboard/Modals/BlockedTimeModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BarberData } from "@/DummyData/FilterData";
import toast from "react-hot-toast";

// Mock data functions
const fetchEmployees = async () => {
  return [
    {
      id: 1,
      name: "Myself (Owner)",
      role: "Owner",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Senior Stylist",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Junior Stylist",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];
};

const fetchAppointments = async () => {
  return [
    {
      id: "1",
      employeeId: 1,
      title: "Hair Treatment",
      start: "2025-03-25T10:00:00",
      end: "2025-03-25T11:30:00",
      client: "Emma Watson",
      price: "BDT 120",
      type: "appointment",
    },
    {
      id: "2",
      employeeId: 2,
      title: "Haircut",
      start: "2025-03-25T10:00:00",
      end: "2025-03-25T11:30:00",
      client: "John Smith",
      price: "BDT 60",
      type: "appointment",
    },
    {
      id: "3",
      employeeId: 3,
      title: "Coloring",
      start: "2025-03-25T10:00:00",
      end: "2025-03-25T11:30:00",
      client: "Lisa Ray",
      price: "BDT 150",
      type: "appointment",
    },
    {
      id: "4",
      title: "Lunch Break",
      start: "2025-03-25T13:00:00",
      end: "2025-03-25T14:00:00",
      color: "#ff9800",
      type: "block",
    },
  ];
};

const BusinessDashboardCalendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [calendarView, setCalendarView] = useState("timeGridDay");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [employees, setEmployees] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [newEventModalOpen, setNewEventModalOpen] = useState(false);
  const [filterOpen, setfilterOpen] = useState();
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(Date.now() + 60 * 60 * 1000),
    employeeId: "",
    client: "",
    price: "",
    type: "appointment",
  });
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [FilterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const handleCheckboxChange = (filterIndex, selectedItem) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterIndex]: selectedItem, // Only store one selected item per filterIndex
    }));
  };

  const calendarRef = useRef(null);
  const modalRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [employeeData, appointmentData] = await Promise.all([
          fetchEmployees(),
          fetchAppointments(),
        ]);
        setEmployees(employeeData);
        setAppointments(appointmentData);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // Generate events with employee association and professional filtering
  const generateEvents = () => {
    const getEmployeeById = (id) => employees.find((emp) => emp.id === id);
    const generateColor = (id) =>
      `#${((id * 2654435761) % 16777215).toString(16).padStart(6, "0")}`;

    return appointments.map((appt) => {
      if (appt.type === "block") {
        return {
          ...appt,
          display: "background",
          color: appt.color || "#ff9800",
        };
      }

      const employee = getEmployeeById(appt.employeeId);
      return {
        ...appt,
        title: `${appt.client} - ${appt.title}`,
        color: employee ? generateColor(employee.id) : "#000000",
        extendedProps: {
          employee,
          client: appt.client,
          service: appt.title,
          price: appt.price,
          type: appt.type,
        },
      };
    });
  };

  const handleEventClick = (info) => {
    const event = info.event;
    if (event.extendedProps?.type === "block") return;

    setSelectedEvent({
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      client: event.extendedProps.client,
      service: event.extendedProps.service,
      price: event.extendedProps.price,
      employee: event.extendedProps.employee,
      type: "appointment",
    });
    setModalOpen(true);
  };

  const handleDateClick = (arg) => {
    setNewEvent({
      title: "",
      start: arg.date,
      end: new Date(arg.date.getTime() + 60 * 60 * 1000),
      employeeId: selectedProfessional || "",
      client: "",
      price: "",
      type: "appointment",
    });
    setNewEventModalOpen(true);
  };

  const handleAddBlockTime = () => {
    const now = new Date();
    setNewEvent({
      title: "Block Time",
      start: now,
      end: new Date(now.getTime() + 60 * 60 * 1000),
      employeeId: "",
      client: "",
      price: "",
      type: "block",
    });
    setNewEventModalOpen(true);
  };

  const formatDateForInput = (date) => {
    if (!date || !(date instanceof Date)) return "";
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - offset).toISOString().slice(0, 16);
  };

  const handleDateTimeChange = (field, value) => {
    const date = new Date(value);
    setNewEvent((prev) => ({
      ...prev,
      [field]: isNaN(date.getTime()) ? prev[field] : date,
    }));
  };

  const saveEvent = () => {
    const eventToSave = {
      ...newEvent,
      id: `event-${Date.now()}`,
      color: newEvent.type === "block" ? "#ff9800" : undefined,
    };

    setAppointments([...appointments, eventToSave]);
    setNewEventModalOpen(false);
    setNewEvent({
      title: "",
      start: new Date(),
      end: new Date(Date.now() + 60 * 60 * 1000),
      employeeId: selectedProfessional || "",
      client: "",
      price: "",
      type: "appointment",
    });
  };

  const updateEvent = () => {
    const updatedAppointments = appointments.map((appt) =>
      appt.id === selectedEvent.id ? { ...appt, ...selectedEvent } : appt
    );
    setAppointments(updatedAppointments);
    setModalOpen(false);
  };

  const deleteEvent = () => {
    const filteredAppointments = appointments.filter(
      (appt) => appt.id !== selectedEvent.id
    );
    setAppointments(filteredAppointments);
    setModalOpen(false);
  };

  const navigateDate = (action) => {
    const newDate = new Date(currentDate);
    switch (action) {
      case "prev":
        calendarView === "dayGridMonth"
          ? newDate.setMonth(newDate.getMonth() - 1)
          : calendarView === "dayGridWeek"
          ? newDate.setDate(newDate.getDate() - 7)
          : newDate.setDate(newDate.getDate() - 1);
        break;
      case "next":
        calendarView === "dayGridMonth"
          ? newDate.setMonth(newDate.getMonth() + 1)
          : calendarView === "dayGridWeek"
          ? newDate.setDate(newDate.getDate() + 7)
          : newDate.setDate(newDate.getDate() + 1);
        break;
      case "today":
        newDate.setTime(Date.now());
        break;
    }
    setCurrentDate(newDate);
  };

  const handleProfessionalSelect = (professionalId) => {
    setSelectedProfessional(
      professionalId === "all" ? null : parseInt(professionalId)
    );
  };

  return (
    <div className="py-4 relative ">
      {/* Top Navigation */}
      <div className="flex px-5 2xl:px-10 flex-col md:flex-row flex-wrap justify-between items-start md:items-center mb-4 gap-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-5 flex-wrap">
            <button
              className=" px-4 2xl:px-[25px] font-manrope py-2 rounded-[24px] border-[1px] border-solid border-[#B3BAC5] text-[#1E1E1E] leading-[150%] font-medium text-base"
              onClick={() => navigateDate("today")}
            >
              Today
            </button>

            <div className="px-[25px] font-manrope py-2 rounded-[24px] border-[1px] border-solid border-[#B3BAC5] text-[#1E1E1E] leading-[150%] font-medium text-base flex items-center">
              <button onClick={() => navigateDate("prev")}>
                <PrevArrorIcon />
              </button>
              <hr className="w-[0.5px] h-5 bg-[#DFE1E6] mx-2  " />
              <span className="px-3 py-1 font-medium">
                {currentDate.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                  day: "numeric",
                })}
              </span>
              <hr className="w-[0.5px] h-5 bg-[#DFE1E6] mx-2  " />
              <button onClick={() => navigateDate("next")}>
                <NextArrowIcon />
              </button>
            </div>

            <div className="px-[25px] font-manrope py-2 rounded-[24px] border-[1px] border-solid border-[#B3BAC5] text-[#1E1E1E] leading-[150%] font-medium text-base relative flex items-center cursor-pointer ">
              <span>Scheduled Team</span>
              <button
                onClick={() => {
                  setfilterOpen(true);
                }}
                className="rotate-[90deg]"
              >
                <NextArrowIcon />
              </button>
            </div>

            <div className="px-[25px] font-manrope py-2 rounded-[24px] border-[1px] border-solid border-[#B3BAC5] text-[#1E1E1E] leading-[150%] font-medium text-base flex items-center">
              <button
                onClick={() => {
                  setFilterOpen(true);
                }}
                className="rotate-[90deg]"
              >
                <FilterSvg />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="px-[25px] font-manrope py-2 rounded-[24px] border-[1px] border-solid border-[#B3BAC5] text-[#1E1E1E] leading-[150%] font-medium text-base flex items-center cursor-pointer flex-row  ">
            <button
              onClick={() => {
                window.location.reload();
              }}
              className=""
            >
              <ReloadIconSvg />
            </button>
            <hr className="w-[0.5px] h-5 bg-[#DFE1E6] mx-2  " />
            <div className="flex flex-row gap-x-[22px] ">
              <span>Day</span>
              <button
                onClick={() => {
                  // setfilterOpen(true);
                }}
                className="rotate-[90deg]"
              >
                <NextArrowIcon />
              </button>
            </div>
          </div>
          {/* Add popover */}
          <Popover>
            <PopoverTrigger>
              <button className="px-4 py-[10px] flex gap-2 items-center outline-none border border-[#DFE1E6] rounded-[100px]">
                <p className="text-textColor font-manrope text-base font-bold leading-6">
                  Add
                </p>
                <DropdownSvg />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[220px] p-4">
              <div className="space-y-4">
                <button className="flex gap-2 items-center">
                  <p className="text-textColor text-base font-manrope font-medium leading-6 hover:bg-primary transition-all ease-in-out duration-300 py-2 px-3 rounded-xl">
                    Appointment
                  </p>
                </button>
                <button className="flex gap-2 items-center">
                  <p className="text-textColor text-base font-manrope font-medium leading-6 py-2 px-3 rounded-xl hover:bg-primary transition-all ease-in-out duration-300">
                    Group Appointment
                  </p>
                </button>
                <button className="flex gap-2 items-center">
                  <p className="text-textColor text-base font-manrope font-medium leading-6 py-2 px-3 rounded-xl hover:bg-primary transition-all ease-in-out duration-300">
                    <BlockedTimeModal />
                  </p>
                </button>
                <button className="flex gap-2 items-center">
                  <p className="text-textColor text-base font-manrope font-medium leading-6 py-2 px-3 rounded-xl hover:bg-primary transition-all ease-in-out duration-300">
                    Sale
                  </p>
                </button>
                <button className="flex gap-2 items-center">
                  <p className="text-textColor text-base font-manrope font-medium leading-6 py-2 px-3 rounded-xl hover:bg-primary transition-all ease-in-out duration-300">
                    Quick Payment
                  </p>
                </button>
              </div>
            </PopoverContent>
          </Popover>
          {/*  */}
        </div>
      </div>

      {/* Employees Section */}
      <div className="flex flex-row justify-between w-full items-center 2xl:px-[136px] bg-white py-[18px] bg-calenderShadow border-t-[1px] border-solid  ">
        {employees?.map(employee => (
          <div
            key={employee.id}
            className=" cursor-pointer flex flex-col items-center"
          >
            <img
              src={employee.profilePic}
              alt={employee.name}
              className="w-12 h-12 rounded-full mr-3 object-cover"
            />
            <div className="relative flex items-center gap-x-1 ">
              <div className="rotate-[0deg]">
                <Popover>
                  <PopoverTrigger>
                    <button className="flex items-center">
                      <h3 className="font-medium">{employee.name}</h3>
                      <DropdownSvg />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[220px] p-4">
                    <div className="space-y-4">
                      <Link to={"/"} className="flex gap-2 items-center">
                        <DayViewSvg />
                        <p className="text-textColor text-base font-manrope font-medium leading-6">
                          Day view
                        </p>
                      </Link>
                      <Link to={"/"} className="flex gap-2 items-center">
                        <ThreeDayViewSvg />
                        <p className="text-textColor text-base font-manrope font-medium leading-6">
                          3 day view
                        </p>
                      </Link>
                      <Link to={"/"} className="flex gap-2 items-center">
                        <WeekViewSvg />
                        <p className="text-textColor text-base font-manrope font-medium leading-6">
                          Week view
                        </p>
                      </Link>
                      <Link to={"/"} className="flex gap-2 items-center">
                        <MonthViewSvg />
                        <p className="text-textColor text-base font-manrope font-medium leading-6">
                          Month view
                        </p>
                      </Link>
                      <div className="border"></div>
                      <p className="text-textColor font-manrope text-sm font-medium">
                        Add blocked time
                      </p>
                      <p className="text-textColor font-manrope text-sm font-medium">
                        Edit shift
                      </p>
                      <p className="text-textColor font-manrope text-sm font-medium">
                        Add time off
                      </p>
                      <p className="text-textColor font-manrope text-sm font-medium">
                        View team member
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar Component */}
      <div className="bg-white rounded-lg shadow w-full overflow-x-hidden">
        <FullCalendar
          ref={calendarRef}
          plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
          initialView={calendarView}
          headerToolbar={false}
          events={generateEvents()}
          eventClick={handleEventClick}
          dateClick={handleDateClick}
          slotMinTime="08:00:00"
          slotMaxTime="20:00:00"
          editable={true}
          height="auto"
          nowIndicator={true}
          initialDate={currentDate}
          datesSet={(arg) => {
            console.log("Calendar date range:", arg.start, arg.end);
            setCurrentDate(new Date(arg.start));
          }}
          dayMaxEvents={true}
          dayHeaderFormat={{
            weekday: "short",
            day: "numeric",
            month: calendarView === "dayGridMonth" ? "short" : undefined,
          }}
          eventDisplay="block"
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }}
          eventOverlap={false}
          slotEventOverlap={false}
          contentHeight="auto"
        />
      </div>

      {/* Appointment Details Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <img
                src={selectedEvent?.employee?.profilePic}
                alt={selectedEvent?.employee?.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {selectedEvent?.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {selectedEvent?.employee?.role}
                </p>
              </div>
            </div>
          </DialogHeader>
          <DialogDescription className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Appointment Details</h3>
                <p>
                  <strong>Time:</strong>{" "}
                  {selectedEvent?.start?.toLocaleTimeString()}
                </p>
                <p>
                  <strong>Service:</strong> {selectedEvent?.service}
                </p>
                <p>
                  <strong>Price:</strong> {selectedEvent?.price}
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Client Information</h3>
                <p>
                  <strong>Name:</strong> {selectedEvent?.client}
                </p>
                <p>
                  <strong>With:</strong> {selectedEvent?.employee?.name}
                </p>
              </div>
            </div>
          </DialogDescription>
          <DialogFooter>
            <Button variant="destructive" onClick={deleteEvent}>
              Delete
            </Button>
            <Button onClick={updateEvent}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New Event Modal */}
      <Dialog open={newEventModalOpen} onOpenChange={setNewEventModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <h2 className="text-lg font-semibold">
              {newEvent.type === "block" ? "Add Block Time" : "New Appointment"}
            </h2>
          </DialogHeader>
          <DialogDescription className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
              </div>

              {newEvent.type === "appointment" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="employee">Employee</Label>
                    <Select
                      value={newEvent.employeeId?.toString() || ""}
                      onValueChange={(value) =>
                        setNewEvent({
                          ...newEvent,
                          employeeId: parseInt(value),
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select employee" />
                      </SelectTrigger>
                      <SelectContent>
                        {employees.map((employee) => (
                          <SelectItem
                            key={employee.id}
                            value={employee.id.toString()}
                          >
                            {employee.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="client">Client Name</Label>
                    <Input
                      id="client"
                      value={newEvent.client}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, client: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      value={newEvent.price}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, price: e.target.value })
                      }
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="start">Start Time</Label>
                <Input
                  id="start"
                  type="datetime-local"
                  value={formatDateForInput(newEvent.start)}
                  onChange={(e) =>
                    handleDateTimeChange("start", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="end">End Time</Label>
                <Input
                  id="end"
                  type="datetime-local"
                  value={formatDateForInput(newEvent.end)}
                  onChange={(e) => handleDateTimeChange("end", e.target.value)}
                />
              </div>
            </div>
          </DialogDescription>
          <DialogFooter>
            <Button onClick={saveEvent}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* filter modal */}
      <Dialog open={filterOpen} onOpenChange={setfilterOpen}>
        <DialogContent className=" max-w-[420px] rounded-[16px] text-[#1E1E1E] leading-[150%] font-medium text-base ">
          <div className="flex flex-col gap-y-5 ">
            <div className="flex flex-row gap-x-[10px] cursor-pointer ">
              <GroupSvg />
              <span>Scheduled team</span>
            </div>
            <div className="flex flex-row gap-x-[10px] cursor-pointer ">
              <GroupSvg />
              <span>All team</span>
            </div>
            <div className="flex flex-row gap-x-[10px] cursor-pointer ">
              <img
                src={employees[0]?.profilePic}
                className="h-[24px] w-[24px] object-cover rounded-full "
                alt="not found"
              />
              <span> {employees[0]?.name} </span>
            </div>
          </div>
          <hr className="w-full h-[0.5px] bg-[#DFE1E6] my-5  " />
          <div className="flex flex-col gap-y-5 ">
            <div className="flex flex-row w-full justify-between ">
              <span>Team members</span>
              <span className="text-primary cursor-pointer">Clear all</span>
            </div>
            <div className="flex flex-col gap-y-5">
              {employees.map((employee, idx) => {
                console.log(employee);
                return (
                  <div
                    key={idx}
                    className="flex flex-row gap-x-[10px] cursor-pointer "
                  >
                    <input type="checkbox" />
                    <img
                      src={employee?.profilePic}
                      className="h-[24px] w-[24px] object-cover rounded-full "
                      alt="not found"
                    />
                    <span> {employee?.name} </span>
                  </div>
                );
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Drawer
        width={609}
        open={FilterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <div className="flex flex-col h-full justify-between   ">
          <div className="flex flex-col gap-y-8 ">
            <h2 className="text-[#2C2C2C] text-[28px] leading-[120%] font-medium ">
              All filters
            </h2>
            <Accordion type="single" collapsible className="border-none">
              {BarberData.map((filter, idx) => {
                return (
                  <AccordionItem value={`${idx}`} className="border-none">
                    <AccordionTrigger className=" text-[#1E1E1E] text-base font-medium leading-[150%] ">
                      <div className="flex flex-row items-center gap-x-[10px]  ">
                        <AllFilter />
                        {filter.filterTittle}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="border-none flex flex-col gap-y-1 ">
                      {filter.filterStatus.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex flex-row gap-x-[10px] py-[10.5px]"
                        >
                          <input
                            type="checkbox"
                            checked={selectedFilters[idx] === item} // Only one can be checked at a time
                            onChange={() => handleCheckboxChange(idx, item)}
                          />
                          <span className="text-[#1E1E1E] text-[14px] font-manrope font-medium leading-[150%]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div className="flex flex-col relative w-full ">
            <hr className="h-[0.5px] w-full bg-[#DFE1E6]  " />
            <div className="py-[42px] flex items-center  justify-center gap-x-5  ">
              <button
                onClick={() => {
                  const hasSelection = Object.values(selectedFilters).some(
                    (value) => value
                  );

                  if (hasSelection) {
                    setSelectedFilters({});
                    toast.success("Filters removed successfully");
                  } else {
                    toast.error("Nothing to clear");
                  }
                }}
                className="py-[14.5px] px-4 lg:px-[69px] border-[1px] border-solid rounded-[8px] border-[#DFE1E6] text-[#2C2C2C] text-[14px] font-manrope font-medium leading-[150%] hover:border-transparent hover:text-white hover:bg-primary ease-in-out duration-300 "
              >
                Clear filters
              </button>
              <button
                onClick={() => {
                  const hasSelection = Object.values(selectedFilters).some(
                    (value) => value
                  );

                  if (hasSelection) {
                    toast.success("Filters applied successfully");
                    setFilterOpen(close);
                  } else {
                    toast.error("Please select a filter to apply");
                  }
                }}
                className="py-[14.5px] px-8 lg:px-[69px]  text-[14px] font-manrope font-medium leading-[150%] bg-primary  text-white cursor-pointer border-[1px] border-transparent hover:border-solid rounded-[8px] border-[#DFE1E6] hover:bg-transparent hover:border-[#DFE1E6] hover:text-[#2c2c2c] ease-in-out duration-300  "
              >
                {" "}
                Apply
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default BusinessDashboardCalendar;
