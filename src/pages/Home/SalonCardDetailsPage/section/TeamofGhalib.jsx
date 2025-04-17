import galibsPic1 from "../../../../assets/images/team-of-galib/galibsPic.png";
import galibsPic2 from "../../../../assets/images/team-of-galib/galibsPic1.png";
import galibsPic3 from "../../../../assets/images/team-of-galib/galibsPic2.png";
import galibsPic4 from "../../../../assets/images/team-of-galib/galibsPic3.png";
import galibsPic5 from "../../../../assets/images/team-of-galib/galibsPic4.png";

const TeamofGhalib = () => {
  const people = [
    {
      name: "Mohammed Amin",
      job: "Barber",
      pic: galibsPic1,
    },
    {
      name: "John Doe",
      job: "Web Developer",
      pic: galibsPic2,
    },
    {
      name: "Jane Smith",
      job: "Designer",
      pic: galibsPic3,
    },
    {
      name: "Jane Smith",
      job: "Designer",
      pic: galibsPic4,
    },
    {
      name: "Jane Smith",
      job: "Designer",
      pic: galibsPic5,
    },
  ];

  return (
    <section className="container pb-10 2xl:py-20 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      <h1 className="text-[#2C2C2C] font-outfit text-2xl xl:text-3xl 2xl:text-[32px] font-medium">
        Team of galibi&apos;s Barber Salon
      </h1>
      {/* card section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 place-items-center">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-primaryLight  border-[0.4px] border-primary max-w-[249px] rounded-tl-[52px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] p-6 mt-8"
          >
            <img src={person.pic} alt={person.name} />
            <div className="text-center mt-2">
              <h1 className="text-[#2C2C2C] font-manrope text-lg font-semibold">
                {person.name}
              </h1>
              <p className="text-[#2C2C2C] font-manrope text-lg font-semibold mt-1">
                {person.job}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamofGhalib;
