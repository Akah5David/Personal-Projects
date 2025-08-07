import { motion } from "framer-motion";

import SliderButton from "../Reusable-Components/SliderButton";
import Section from "../Reusable-Components/SubscribeButton";

export default function CategoriesPage({ categories }) {
  return (
    <section className="relative inset-0 ">
      <div className="relative flex flex-col gap-5  w-full p-8 overflow-hidden">
        <div className="flex items-center justify-between">
          <h1 className="text-[1.5rem] font-bold text-white  ">
            Documentaries
          </h1>
          <p>Browse all</p>
        </div>
        <ul className="flex gap-5 snap-x snap-mandatory scroll-smooth pb-19 pt-2 select-none">
          {categories.map((category) => (
            <motion.li
              key={category.name}
              className="  flex-1 relative shadow-md bg-cover bg-top-left bg-no-repeat aspect-15/9 w-[15%] rounded-xl transition-transform duration-300 hover:scale-97 hover:bg-center"
              style={{
                backgroundImage: `url(${category.documentaries[0].image})`,
              }}
            >
              <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/5 via-black/20 to-black/98 rounded-xl" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 text-white">
                <h2 className="text-3xl/2 mb-3 font-sans font-stretch-condensed font-extrabold">
                  {category.name}
                </h2>
                <p className=" text-xl/10 mt-2">Documentaries</p>
              </div>
              <div className="absolute  flex flex-col bottom-[-55%] left-0 mb-2 w-[100%] bg-black">
                <h4 className="font-bold text-xl/8 ">Title-of-movie</h4>
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
