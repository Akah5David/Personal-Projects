import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import SliderButton from "../Reusable-Components/SliderButton";
import Section from "../Reusable-Components/Section";

export default function CategoriesPage({ categories }) {
   const itemRefs = useRef([]);
    const [snapAlign, setSnapAlign] = useState("end");
    const categoriesLength = categories.length;
  
    // Duplicate categories 3 times for seamless loop illusion
    const duplicatedCategories = [...categories, ...categories, ...categories]; // allows for infinite loop
  
    // Start in the middle set
    const initialIndex = categoriesLength;
    const [activeIndex, setActiveIndex] = useState(initialIndex);
  
    const snapHandler = (index) => {
      setActiveIndex(index);
      itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    };
  
    const handleNext = () => {
      setSnapAlign(() => (activeIndex === activeIndex + 3 ? "start" : "end"));
      snapHandler(activeIndex + 3);
      console.log("snap-align", snapAlign);
    };
  
    const handlePrev = () => {
      setSnapAlign(() => (activeIndex === activeIndex - 3 ? "end" : "start"));
      snapHandler(activeIndex - 3);
    };
  
    useEffect(() => {
      const middleStart = categoriesLength;
      const middleEnd = categoriesLength * 2 - 3;
  
      let timeout;
      if (activeIndex > middleEnd) {
        timeout = setTimeout(() => {
          setActiveIndex(middleStart);
          itemRefs.current[middleStart]?.scrollIntoView({
            behavior: "instant",
            block: "nearest",
            inline: "start",
          });
        }, 300);
      }
      if (activeIndex < middleStart) {
        const resetIndex = middleEnd;
        timeout = setTimeout(() => {
          setActiveIndex(resetIndex);
          itemRefs.current[resetIndex]?.scrollIntoView({
            behavior: "instant",
            block: "nearest",
            inline: "start",
          });
        }, 300);
      }
      return () => clearTimeout(timeout);
    }, [activeIndex, categoriesLength]);
  
    return (
      <section className="relative inset-0 ">
        <SliderButton handleNext={handleNext} handlePrev={handlePrev} />
        <div className="relative flex flex-col  pl-[45px] gap-5 pr-[2px] w-full pb-[100px]  bg-black overflow-hidden">
          <div className="flex items-center justify-between  pr-[45px]">
            <h1 className="text-[2rem] font-bold text-white  ">
              Popular documentaries
            </h1>
            <p >Browse all</p>
          </div>
          <ul
            className="flex  gap-5 snap-x snap-mandatory scroll-smooth pb-19 pt-2 pl-6  select-none overflow-x-hidden scroll-ps-4 scroll-pe-3 "
            style={{ scrollBehavior: "smooth" }}
          >
            {duplicatedCategories.map((category, index) => (
              <motion.li
                key={`${category.name}-${index}`}
                ref={(el) => (itemRefs.current[index] = el)}
                className="  flex-none relative shadow-md bg-cover bg-top-left bg-no-repeat aspect-16/9 w-[31%] rounded-3xl transition-transform duration-300 hover:scale-97 hover:bg-center"
                style={{
                  backgroundImage: `url(${category.documentries[0].image})`,
                  scrollSnapAlign: snapAlign,
                }}
              >
                <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/5 via-black/20 to-black/98 rounded-3xl" />
                <div className="absolute bottom-1/6 left-1/6 z-40 text-white">
                  <h2 className="text-5xl/10 mb-3 font-strech-condesed font-bold">
                    {category.name}
                  </h2>
                  <p className=" text-2xl/10 mt-2">
                    <span>{category.documentries.length}</span> Documentaries
                  </p>
                </div>
                <div className="relative bottom-[-103%] left-[0.5]  botttom-2 h-[30%] w-[100%] bg-black">
                  <h4 className="font-bold text-2xl/8 ">Title-of-movie</h4>
                  <p className="text-[1rem]">
                    <span>2022</span> -- <span>1hr 30ms</span>
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  