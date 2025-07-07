export default function SearchBoxl({ data }) {
  return (
    <section className="sm:pt-[40px]">
      <div className="container">
        <h2 className="text-[24px] text-center xl:text-[40px] 2xl:text-[68px] font-semibold font-outfit">
          {data?.title}
        </h2>
      </div>
    </section>
  );
}
