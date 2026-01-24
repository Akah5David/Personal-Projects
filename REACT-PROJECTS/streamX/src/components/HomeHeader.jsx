import { Link, useOutletContext } from "react-router-dom";

import NavBar from "../reusable_components/NavBar";
import SubscribeButton from "../reusable_components/SubscribeButton";

export default function Header({ HomePageData, scrollToSections }) {
  console.log("HomeHeader LoadersData", HomePageData);

  return (
    <header>
      <div className=" relative w-screen h-screen bg-orange-700">
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/5 to-black/"></div>
        <div className="bg-[url(/images/background.jpeg)] bg-no-repeat bg-center bg-cover inset-0 absolute z-10 bg-local"></div>
        <div className="absolute z-30 inset-0">
          <NavBar
            LoadersData={HomePageData}
            scrollToSections={scrollToSections}
          />
          <div className="relative ml-[50px] my-[100px] w-[50%] pb-[30px] text-left ">
            <h1 className="text-white text-[60px] font-bold">
              Unlimited Animals documentaries in 4k
            </h1>
            <p className="text-white text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit massa a
              netus elit cursus eget viverra vitae risus nunc facilisis feugiat.
            </p>
            <div className="w-full mt-[40px] flex items-center gap-10">
              <SubscribeButton btnAction="Subscribe today!" />
              <Link
                to="/"
                className="bg-[#c5c1c16b] py-4 px-4 rounded-full font-medium text-white"
              >
                Explore documentaries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
