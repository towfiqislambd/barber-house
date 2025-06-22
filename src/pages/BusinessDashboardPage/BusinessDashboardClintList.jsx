import { AppointmentsSearchSvg } from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "m5gr84i9",
    Client_name: "M. R. Shihab",
    phone_number: "+966 14 123 4567",
    reviews: "4.8",
    sales: "SAR 10.00",
    createdAt: "7 Feb 2025",
  },
  {
    id: "3u1reuv4",
    Client_name: "Fahim R.",
    phone_number: "+966 14 123 4567",
    reviews: "4.8",
    sales: "SAR 10.00",
    createdAt: "7 Feb 2025",
  },
  {
    id: "derv1ws0",
    Client_name: "Hasan M",
    phone_number: "+966 14 123 4567",
    reviews: "4.8",
    sales: "SAR 10.00",
    createdAt: "7 Feb 2025",
  },
  {
    id: "5kma53ae",
    Client_name: "M. R. Shihab",
    phone_number: "+966 14 123 4567",
    reviews: "4.8",
    sales: "SAR 10.00",
    createdAt: "7 Feb 2025",
  },
  {
    id: "bhqecj4p",
    Client_name: "Tahmid K.",
    phone_number: "+966 14 123 4567",
    reviews: "4.8",
    sales: "SAR 10.00",
    createdAt: "7 Feb 2025",
  },
  {
    id: "bhqecj4p",
    Client_name: "M. R. Shihab",
    phone_number: "+966 14 123 4567",
    reviews: "4.8",
    sales: "SAR 10.00",
    createdAt: "7 Feb 2025",
  },
];

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Client_name",
    header: "Client Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Client_name")}</div>
    ),
  },
  {
    accessorKey: "phone_number",
    header: "Mobile Number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone_number")}</div>
    ),
  },
  {
    accessorKey: "reviews",
    header: "Reviews",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("reviews")}</div>
    ),
  },
  {
    accessorKey: "sales",
    header: "Sales",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("sales")}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("createdAt")}</div>
    ),
  },
];

const BusinessDashboardClintList = () => {
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { columnVisibility, rowSelection },
  });

  return (
    <div className="p-5 md:p-0">
      <h3 className="text-[#2C2C2C] font-outfit text-xl lg:text-2xl font-medium mb-2">
        Clients list (5)
      </h3>
      <p className="text-[#2C2C2C] lg:text-lg font-medium mb-5 xl:mb-10">
        Track, analyze & grow your salon business daily
      </p>
      {/* Upper part */}
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="flex gap-3 lg:gap-5 items-center flex-wrap">
          {/* Search */}
          <div className="relative w-[300px] md:w-[350px] 4xl:w-[450px]">
            <input
              type="text"
              className="rounded-full bg-white w-full py-2 lg:py-3 px-3 lg:px-5 shadow outline-none border border-gray-100"
              placeholder="Search by reference or client"
            />
            <button className="absolute right-2 top-2 w-7 h-7 lg:w-9 lg:h-9 bg-black grid place-items-center rounded-full">
              <AppointmentsSearchSvg />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-primary mt-5 md:mt-10 pb-5 md:pb-10"></div>

      {/* Table part */}
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow
                className="border-dashed text-nowrap"
                key={headerGroup.id}
              >
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  className="border-dashed text-nowrap"
                  key={row.id}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell className="py-7" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} clients selected.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboardClintList;
