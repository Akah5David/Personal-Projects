import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SliderButton from "../Reusable-Components/SliderButton";
import Section from "../Reusable-Components/SubscribeButton";

export default function TvGenres({ tvGenres, tvGenreRef }) {
  const sliderRef = useRef(null);

  // Guard against undefined data
  if (!tvGenres || tvGenres.length === 0) {
    return (
      <section ref={tvGenreRef} className="relative inset-0 my-0 bg-black">
        <div className="relative pl-[45px] pr-[15px] w-full py-[50px]">
          <h1 className="text-[2rem] font-bold text-white pb-[1.5rem]">
            TV
          </h1>
          <p className="text-gray-400">No movies available</p>
        </div>
      </section>
    );
  }

  // ! I don't understand this function and what it does.
  const SLIDE_AMOUNT = () => sliderRef.current.offsetWidth;

  const handleNext = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: SLIDE_AMOUNT(),
      behavior: "smooth",
    });
  };
  const handlePrev = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -SLIDE_AMOUNT(),
      behavior: "smooth",
    });
  };

  return (
    <section ref={tvGenreRef} className="relative inset-0 my-0 bg-black">
      <SliderButton handleNext={handleNext} handlePrev={handlePrev} />
      <div className="relative pl-[45px] pr-[15px] w-full py-[50px] overflow-hidden">
        <h1 className="text-[2rem] font-bold text-white pb-[1.5rem] ">Tv</h1>
        <ul
          ref={sliderRef}
          className="flex gap-5 snap-x snap-mandatory scroll-smooth pb-19 pt-2 pl-6  select-none  overflow-scroll no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {tvGenres.map((tv) => (
            <motion.li
              key={`${tv.id}`}
              className="flex-none w-[31%] snap-center snap-always scroll-m-6"
            >
              <Link to={`/tv/${tv.name.toLowerCase()}`}>
                <div
                  className="relative shadow-md bg-cover bg-center bg-no-repeat aspect-2/3  rounded-3xl transition-transform duration-300 hover:scale-97 hover:bg-center"
                  style={{
                    backgroundImage: `url(${tv.image})`,
                    // scrollSnapAlign: "center",
                  }}
                >
                  <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/5 via-black/20 to-black/98 rounded-3xl">
                    <div className="absolute bottom-1/6 left-[50%] translate-x-[-50%] z-40 text-white">
                      <h2 className="text-2xl/10 mb-3 font-stretch-condensed font-bold">
                        {tv.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
