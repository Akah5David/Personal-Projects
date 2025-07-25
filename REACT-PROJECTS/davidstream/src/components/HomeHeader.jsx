import { Link } from "react-router-dom";

import NavBar from "../Reusable-Components/NavBar";

export default function Header() {
  return (
    <div>
      <div className=" relative w-screen h-screen bg-orange-700">
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/90 to-black/100"></div>
        <div className="bg-[url(/images/background.jpeg)] bg-no-repeat bg-center bg-cover inset-0 absolute z-10 bg-local"></div>
        <div className="absolute z-30 inset-0">
          <NavBar />
          <div className="relative ml-[50px] my-[100px] w-[50%] pb-[30px] text-left ">
            <h1 className="text-white text-[60px] font-bold">
              Unlimited Animals documentries in 4k
            </h1>
            <p className="text-white text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit massa a
              netus elit cursus eget viverra vitae risus nunc facilisis feugiat.
            </p>
            <div className="w-full mt-[40px] flex items-center gap-10">
              <Link to="/" className="bg-[#19a3ff]  py-4 px-4 rounded-full">
                Subscribe today!
              </Link>
              <Link
                to="/"
                className="bg-[#c5c1c16b] py-4 px-4 rounded-full font-medium text-white"
              >
                Explore documentries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
