import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SliderButton from "../Reusable-Components/SliderButton";
export default function TopRatedMovies({ topRatedMovies, topRatedRef }) {
  const sliderRef = useRef(null);

  // Guard against undefined data
  if (!topRatedMovies || topRatedMovies.length === 0) {
    return (
      <section ref={topRatedRef} className="relative inset-0 my-0 bg-black">
        <div className="relative pl-[45px] pr-[15px] w-full py-[50px]">
          <h1 className="text-[2rem] font-bold text-white pb-[1.5rem]">
            Top Rated
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
    <section ref={topRatedRef} className="relative inset-0 my-0 bg-black">
      <SliderButton handleNext={handleNext} handlePrev={handlePrev} />
      <div className="relative pl-[45px] pr-[15px] w-full py-[50px] overflow-hidden">
        <h1 className="text-[2rem] font-bold text-white pb-[1.5rem] ">
          Top Rated
        </h1>
        <ul
          ref={sliderRef}
          className="flex gap-5 snap-x snap-mandatory scroll-smooth pb-19 pt-2 pl-6  select-none  overflow-scroll no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {topRatedMovies.map((movie) => (
            <motion.li
              key={`${movie.id}`}
              className="flex-none w-[31%] snap-center snap-always scroll-m-6"
            >
              <Link to={`/movie/${movie.id}`}>
                <div
                  className="relative shadow-md bg-cover bg-top-left bg-no-repeat aspect-2/3  rounded-3xl transition-transform duration-300 hover:scale-97 hover:bg-center"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                    // scrollSnapAlign: "center",
                  }}
                >
                  <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/5 via-black/20 to-black/98 rounded-3xl">
                    <div className="absolute bottom-1/6 left-1/6 z-40 text-white">
                      <h2 className="text-5xl/10 mb-3 font-strech-condesed font-bold">
                        {movie.title}
                      </h2>
                      <p className=" text-2xl/10 mt-2">
                        <span>{movie["vote_count"]}</span> Vote Count
                      </p>
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
