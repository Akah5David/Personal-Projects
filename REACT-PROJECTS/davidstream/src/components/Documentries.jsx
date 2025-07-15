import leftArrow from "../assets/svgs/left-arrow.png";
import rightArrow from "../assets/svgs/right-arrow.png";

export default function DocumentriesPage({ categories }) {
  return (
    <section className="relative w-full  my-[50px]">
      <h1 className="text-[2rem] font-bold text-white pb-[1.5rem]">
        Popular Documentries
      </h1>
      <div className="absolute flex justify-between top-[50%] w-[81.2rem] translate-y-[-50%] z-5">
        <button className=" relative left-[-1.5rem] rounded-[50%] bg-[#ffffff4d]">
          <img
            src={leftArrow}
            alt=" absolute left arrow"
            className="w-[3.5rem]"
          />
        </button>
        <button className=" relative right-[-1.4rem]  rounded-[50%] bg-[#ffffff4d]">
          <img
            src={rightArrow}
            alt=" absolute left arrow"
            className="w-[3.5rem]"
          />
        </button>
      </div>

      <ul className="flex w-full gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {categories?.map((category) => (
          <li
            key={category.name}
            className=" relative shadow-md/20 items-end scroll-mr-6 center bg-cover bg-top-left bg-no-repeat aspect-[3/4] h-auto min-w-[25rem] rounded-2xl ease-in-outtransition-all duration-300 hover:scale-97 hover:transition-all hover:duration-300 hover:ease-out-in hover:bg-center  "
            style={{
              backgroundImage: `url(${category.documentries[0].image})`,
            }}
          >
            <div className="absolute z-30 bg-gradient-to-b from-black/5 via-black/20 to-black/100 w-full h-full inset-0"></div>
            <div className="absolute bottom-[3rem] left-[3rem]">
              <div className="relative z-40 text-white w-full">
                <h2 className=" text-[3rem] font-bold">{category.name}</h2>
                <p>
                  <span>{category.documentries.length}</span> Documentaries
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
