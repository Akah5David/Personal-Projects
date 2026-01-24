import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SliderButton from "../reusable_components/SliderButton";
import Section from "../reusable_components/SubscribeButton";

export default function PopularMovies({ upComingMovies, upComingRef }) {
  const sliderRef = useRef(null);

  // Guard against undefined data
  if (!upComingMovies || upComingMovies.length === 0) {
    return (
      <section ref={upComingRef} className="relative inset-0 my-0 bg-black">
        <div className="relative pl-[45px] pr-[15px] w-full py-[50px]">
          <h1 className="text-[2rem] font-bold text-white pb-[1.5rem]">
            Up Coming
          </h1>
          <p className="text-gray-400">No movies available</p>
        </div>
      </section>
    );
  }

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
      <section ref={upComingRef} className="relative inset-0 my-0 ">
        <SliderButton handleNext={handleNext} handlePrev={handlePrev} />
        <div className=" pl-[15px] pr-[15px] w-full py-[20px] overflow-hidden">
          <h1 className="text-[2rem] font-bold text-white ml-4">
           Up Coming
          </h1>
          <div
            ref={sliderRef}
            className="flex gap-5 snap-x snap-mandatory scroll-smooth py-5 pl-4  select-none  overflow-scroll no-scrollbar "
            style={{ scrollBehavior: "smooth" }}
          >
            {upComingMovies.map((movie) => (
                <Link to={`/upcoming/${movie.id}`}               key={`${movie.id}`}
                className="flex-none w-[15%] aspect-1/1.5 snap-center snap-always scroll-m-6 border-2 rounded-3xl overflow-hidden hover:scale-110">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`movie.original_name`}
                    className="object-cover w-full h-full"
                  />
                </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }
  