import { motion } from "framer-motion";

import SliderButton from "../Reusable-Components/SliderButton";

export default function CategoriesPage({ categories }) {
  return (
    <section className="relative px-8 inset-0">
      <div className="relative w-full py-9 overflow-hidden">
        <h1 className="text-[1.5rem] font-bold text-white pb-[1rem] ">
          Categories
        </h1>
        <ul
          dir="ltr"
          className="flex gap-5 snap-x snap-mandatory scroll-smooth py-5 select-none overflow-hidden scroll-ps-4 scroll-pe-3 "
          style={{ scrollBehavior: "smooth" }}
        >
          {categories.map((category) => (
            <motion.li
              key={category.name}
              className=" flex-1 relative shadow-md bg-cover bg-top-left bg-no-repeat aspect-2/3 min-w-[8%] rounded-3xl transition-transform duration-300 hover:scale-97 hover:bg-center"
              style={{
                backgroundImage: `url(${category.documentaries[0].image})`,
              }}
            >
              <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/5 via-black/20 to-black/98 rounded-3xl" />
              <div className="absolute bottom-4 left-4 z-40 text-white">
                <h2 className="text-2xl/10 mb-3 font-sans font-stretch font-extrabold">
                  {category.name}
                </h2>
                <p className=" text-xl/5 mt-2">
                  <span>{category.documentaries.length}</span> Documentaries
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
