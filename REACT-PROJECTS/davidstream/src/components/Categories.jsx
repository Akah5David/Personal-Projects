import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SliderButton from "../Reusable-Components/SliderButton";

export default function CategoriesPage({ categories }) {
  const itemRefs = useRef([]);
  const categoriesLength = categories.length;

  // Start in the middle set
  const middleStart = categoriesLength;
  const middleEnd = categoriesLength * 2 - 3;

  const ActiveIndexRef = useRef(middleStart);

  // Duplicate categories 3 times for seamless loop illusion
  const duplicatedCategories = [...categories, ...categories, ...categories]; // allows for infinite loop

  const [activeIndex, setActiveIndex] = useState(middleStart);

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const handleNext = () => {
    scrollToIndex(activeIndex + 3);
    ActiveIndexRef.current = activeIndex;
    console.log("ActiveIndexRef ", ActiveIndexRef.current);
  };

  const handlePrev = () => {
    scrollToIndex(activeIndex - 3);
    ActiveIndexRef.current = activeIndex;
    console.log("ActiveIndexRef ", ActiveIndexRef.current);
  };

  useEffect(() => {
    let timeout;

    // Loop back to the middle if we go past the duplicated edges
    if (activeIndex > middleEnd) {
      timeout = setTimeout(() => {
        scrollToIndex(middleStart, "instant");
      }, 300);
    }
    if (activeIndex < middleStart) {
      timeout = setTimeout(() => {
        scrollToIndex(middleEnd, "instant");
      }, 300);
    }
    ActiveIndexRef.current = activeIndex;
    console.log("useEffect ActiveIndexRef ", ActiveIndexRef.current);

    return () => clearTimeout(timeout);
  }, [activeIndex, middleStart, middleEnd]);

  return (
    <section className="relative inset-0 my-0 bg-black">
      <SliderButton handleNext={handleNext} handlePrev={handlePrev} />
      <div className="relative pl-[45px] pr-[15px] w-full py-[50px] overflow-hidden">
        <h1 className="text-[2rem] font-bold text-white pb-[1.5rem] ">
          Explore by category
        </h1>
        <ul
          dir="ltr"
          className="flex gap-5 snap-x snap-mandatory scroll-smooth py-5 pr-2 pl-6 select-none overflow-hidden scroll-ps-4 scroll-pe-3 "
          style={{ scrollBehavior: "smooth" }}
        >
          {duplicatedCategories.map((category, index) => (
            <motion.li
              key={`${category.name}-${index}`}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <Link
                to={`/category/${category.name}`}
                className=" flex-none relative shadow-md bg-cover bg-top-left bg-no-repeat aspect-2/3 w-[31%] rounded-3xl transition-transform duration-300 hover:scale-97 hover:bg-center"
                style={{
                  backgroundImage: `url(${category.documentaries[0].image})`,
                  scrollSnapAlign: "start",
                }}
              >
                <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/5 via-black/20 to-black/98 rounded-3xl" />
                <div className="absolute bottom-1/6 left-1/6 z-40 text-white">
                  <h2 className="text-5xl/10 mb-3 font-stretch-condensed font-bold">
                    {category.name}
                  </h2>
                  <p className=" text-2xl/10 mt-2">
                    <span>{category.documentaries.length}</span> Documentaries
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
