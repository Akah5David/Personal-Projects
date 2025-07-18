import { forwardRef } from "react";
import { motion } from "framer-motion";

const CategorySlider = forwardRef(function CategorySlider(
  { duplicatedCategories, header, aspectRatio },
  ref
) {
  return (
    <section className="relative pl-[45px] pr-[45px] w-full my-[50px] bg-green-500 overflow-hidden">
      <h1 className="text-[2rem] font-bold text-white pb-[1.5rem] ">
        {header}
      </h1>
      <ul
        dir="ltr"
        className="flex bg-orange-600 gap-5 snap-x snap-mandatory scroll-smooth py-[100px]   pl-6 select-none overflow-x-hidden scroll-ps-4 scroll-pe-3 "
        style={{ scrollBehavior: "smooth" }}
      >
        {duplicatedCategories.map((category, index) => (
          <motion.li
            key={`${category.name}-${index}`}
            ref={(el) => (ref.current[index] = el)}
            className="snap-end pb flex-none relative shadow-md bg-cover bg-top-left bg-no-repeat aspectRatio w-[31%] rounded-3xl transition-transform duration-300 hover:scale-97 hover:bg-center"
            style={{
              backgroundImage: `url(${category.documentries[0].image})`,
              aspectRatio: `${aspectRatio}`,
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
          </motion.li>
        ))}
      </ul>
    </section>
  );
});

export default CategorySlider;
