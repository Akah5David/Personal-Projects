import leftArrow from "../assets/svgs/left-arrow.png";
import rightArrow from "../assets/svgs/right-arrow.png";

export default function SliderButton({ handleNext, handlePrev }) {
  return (
    <div className="absolute ml-[50px]  flex justify-between top-1/2 w-[95%] -translate-y-1/2 z-60 ">
      <button
        onClick={handlePrev}
        className="relative left-[-2.3rem] rounded-[50%]   bg-white/40 p-3 hover:bg-white/60 transition"
      >
        <img src={leftArrow} alt=" absolute left arrow" className="w-[3rem] h-[3rem] " />
      </button>
      <button
        onClick={handleNext}
        className="  bg-white/40 p-3 hover:bg-white/60 transition relative  rounded-full "
      >
        <img src={rightArrow} alt=" absolute left arrow" className="w-[3rem] h-[3rem]" />
      </button>
    </div>
  );
}
