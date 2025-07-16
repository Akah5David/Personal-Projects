import { useRef, useState } from "react";

import leftArrow from "../assets/svgs/left-arrow.png";
import rightArrow from "../assets/svgs/right-arrow.png";

export default function CategoriesPage({ categories }) {
  const imageListRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0); // imageListRef.current = null

  function snapHandler(index) {
    imageListRefs.current[index]?.scrollIntoView({
      behaviour: "smooth",
      // block: "nearest",
      // inline: "center",
    });
  }

  function handleNext() {
    let nextIndex = Math.max(activeIndex + 1, categories.length - 1);

    if (nextIndex >= categories.length) {
      nextIndex = 0;
    }

    snapHandler(nextIndex);
    setActiveIndex(nextIndex);
  }

  function handlePrev() {
    let prevIndex = Math.min(activeIndex - 1, categories.length - 1);

    if (prevIndex < 0) {
      prevIndex = categories.length - 1;
    }
    setActiveIndex(prevIndex);
    snapHandler(prevIndex);
  }

  return (
    <section className="relative w-full  my-[100px]">
      <h1 className="text-[2rem] font-bold text-white pb-[1.5rem]">
        Explore by category
      </h1>
      <div className="absolute flex justify-between top-[50%] w-[81.2rem] translate-y-[-50%] z-5">
        <button
          onClick={handlePrev}
          className=" relative left-[-1.5rem] rounded-[50%] bg-[#ffffff4d]"
        >
          <img
            src={leftArrow}
            alt=" absolute left arrow"
            className="w-[3.5rem]"
          />
        </button>
        <button
          onClick={handleNext}
          className=" relative right-[-1.4rem]  rounded-[50%] bg-[#ffffff4d]"
        >
          <img
            src={rightArrow}
            alt=" absolute left arrow"
            className="w-[3.5rem]"
          />
        </button>
      </div>

      <ul
        dir="ltr"
        className="flex  w-full gap-5 overflow-x-auto snap-x scroll-ps-[1rem] scroll-pe-[1rem] snap-mandatory scroll-smooth scro bg-yellow-600 pr-6 pb-5"
      >
        {categories?.map((category, index) => (
          <li
            ref={(element) => (imageListRefs.current[index] = element)}
            key={category.name}
            className=" snap-center snap-always flex-none relative shadow-md/20 items-end  bg-cover bg-top-left bg-no-repeat aspect-[3/4] h-auto min-w-[25.2rem] rounded-t-2xl rounded-b-2xl ease-in-out transition-all duration-300 hover:scale-97 hover:transition-all hover:duration-300 hover:ease-out-in hover:bg-center "
            style={{
              backgroundImage: `url(${category.documentries[0].image})`,
            }}
          >
            <div className="absolute z-30 bg-gradient-to-b from-black/5 via-black/20 to-black/98 w-full h-full inset-0"></div>
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
