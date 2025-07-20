import { Link } from "react-router-dom";

import logoImg from "../assets/svgs/logo.svg";
import arrowImg from "../assets/svgs/arrow.svg";
import profileImg from "../assets/svgs/profile.svg";

export default function Header() {
  return (
    <div>
      <div className=" relative w-screen h-screen bg-orange-700">
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/5 via-black/8 to-black/100"></div>
        <div className="bg-[url(/images/background.jpeg)] bg-no-repeat bg-center bg-cover inset-0 absolute z-10 bg-local"></div>
        <div className="absolute z-30 inset-0">
          <header className=" relative flex items-center gap-20 py-6 px-[50px]  text-white">
            <div className="flex gap-2 items-center min-w-max ">
              <img src={logoImg} alt="Logo" className="h-[60px] w-[30px] " />
              <h3 className="text-white font-bold font-serif text-[25px]">
                Streaming X
              </h3>
            </div>
            <nav className="flex-1  ">
              <ul className="flex justify-end items-center gap-5  min-w-max">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link to="/">Catgories</Link>
                  <img
                    src={arrowImg}
                    alt="arrow"
                    className="w-[17px] h-[17px] font-serif"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <Link to="/">Documenetries</Link>
                  <img
                    src={arrowImg}
                    alt="arrow"
                    className="w-[17px] h-[17px] font-serif"
                  />
                </li>
                <li className="flex items-center gap-2">
                  <Link to="/">Pages</Link>
                  <img
                    src={arrowImg}
                    alt="arrow"
                    className="w-[17px] h-[17px] font-serif"
                  />
                </li>
                <li>
                  <Link to="/">Cart</Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="rounded-[50%] bg-[#c5c1c16b] h-[40px] w-[40px] relative">
                      <img
                        src={profileImg}
                        alt="profile"
                        className="w-[20px] h-[25px] font-serif absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  "
                      />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="bg-[#c5c1c16b] py-2 px-4 rounded-full"
                  >
                    Log Out
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="bg-[#19a3ff] py-2 px-4 rounded-full font-medium text-white"
                  >
                    Subscribe
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

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
