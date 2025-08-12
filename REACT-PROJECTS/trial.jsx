import { Link } from "react-router-dom";

import dolphinImage from "../assets/photos/dolphin.jpg";
import pandaImage from "../assets/photos/panda.jpg";
import cheetahImage from "../assets/photos/cheetah.jpg";

export default function Subscription() {
  return (
    <section className=" grid grid-cols-5 grid-rows-1 text-white w-screen bg-green-600">
      <div className="subscribe-clip-path w- flex flex-col gap-6 py-[100px] bg-[#464040] col-span-2 grid-start-1 px-[50px]">
        <div className=" flex flex-col gap-6">
          <h2 className="text-3xl font-sans font-bold">
            Enjoy your favorite documentries for $9.99
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit quam tellus
            habitant vel elit donec euismod in.
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className=" flex gap-3">
            <svg
              viewBox="0 0 17 17"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-[20px] w-[24px] stroke-white stroke-1"
            >
              <path d="M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z" />
            </svg>

            <p>More than 1,500 documentaries</p>
          </li>

          <li className=" flex gap-3">
            <svg
              viewBox="0 0 17 17"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-[20px] w-[24px] stroke-white stroke-1"
            >
              <path d="M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z" />
            </svg>
            New content every week
          </li>

          <li className="flex gap-3">
            <svg
              viewBox="0 0 17 17"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-[20px] w-[24px] stroke-white stroke-1"
            >
              <path d="M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z" />
            </svg>
            <p>Content in 4K and 8K</p>
          </li>
        </ul>

        <Link
          to="/"
          className="bg-[#19a3ff] w-fit flex-none py-4 px-4 rounded-full"
        >
          Subscribe today!
        </Link>
      </div>

      {/* <div className=" grid grid-cols-9 grid-rows-1 col-start-3 col-end-6 bg-red-500">
        <div className="bg-amber-800 col-span-4">
          <div className="panda-clip-path w-full h-full bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className=" col-span-3 border-none">
          <div className=" dolphin-clip-path w-full h-full my-clip-path bg-cover bg-left bg-no-repeat "></div>
        </div>
        <div className="bg-amber-800 col-span-2">
          <div className=" cheetah-clip-path w-full h-full bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div> */}

      <div className="flex">
        <div className="flex ">
          <img
            src={pandaImage}
            alt="Panda"
            className="flex-2/4 w-full h-full object-cover"
          />
          <img
            src={dolphinImage}
            alt="Dolphin"
            className="flex-2/5 w-full h-full object-cover"
          />
          <img
            src={cheetahImage}
            alt="chetah"
            className="flex-2/6 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
