export default function SearchBoxl({ data }) {
  return (
    <section className="sm:py-[40px] xl:py-[86px]">
      <div className="container">
        <div className="flex gap-[30px] flex-col xl:flex-row items-center px-[15px]">
          <div className="flex-shrink-0">
            <h2 className="text-[24px] xl:text-[68px] font-semibold xl:leading-[86px] font-outfit">
              {data?.title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
