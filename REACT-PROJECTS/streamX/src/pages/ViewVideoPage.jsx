import { Link, useParams, useLoaderData, useLocation } from "react-router-dom";

import NavBar from "../Reusable-Components/NavBar";
import SubscribeButton from "../Reusable-Components/SubscribeButton";
import Documentaries from "../components/Documentaries";
import MoreDocumentaries from "../Reusable-Components/MoreDocumentaries";
import Footer from "../components/Footer";

export default function ViewVideoPage() {
  const params = useParams();
  const LoadersData = useLoaderData();
  const location = useLocation();

  const extractedPath = location.pathname.split("/")[1];
  console.log("extractedPath", extractedPath);

  console.log("ViewVideoPage data", LoadersData.categoriesData);

  const filteredData = LoadersData.categoriesData.find(
    (data) => data.name === params.name
  );

  const filteredCategory = LoadersData.categoriesData.filter(
    (data) => data.name !== params.name
  );

  console.log("filteredCategory", filteredCategory);

  return (
    <>
      {" "}
      <header className="w-screen h-screen">
        <div className=" relative w-full h-full bg-orange-700">
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-black/40 to-black/100"></div>
          <div
            className="bg-no-repeat bg-center bg-cover inset-0 absolute z-10 bg-local"
            style={{
              backgroundImage: `url(${filteredData.documentaries[0].image})`,
            }}
          ></div>
          <div className="absolute z-30 inset-0">
            <NavBar LoadersData={LoadersData} />
            <div className="relative ml-[50px] my-[100px] w-[50%] pb-[30px] text-left ">
              <h6 className="uppercase text-xl text-white">
                Popular on Savanna documentaries
              </h6>
              <h1 className="text-white text-[60px] font-bold">
                The Eye of The Leopard
              </h1>
              <p className="text-white text-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit massa a
                netus elit cursus eget viverra vitae risus nunc facilisis
                feugiat.
              </p>
              <div className="w-full mt-[40px] flex items-center gap-10">
                <SubscribeButton
                  btnAction="Watch now"
                  className="hover:bg-white hover:text-blue-700"
                />
                <Link
                  to="/"
                  className="bg-[#c5c1c16b] py-4 px-4 rounded-full font-medium text-white hover:bg-blue-400"
                >
                  watch trailer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-screen h-screen">
        <section className="relative w-full grid grid-cols-10 bg-pink-900 py-5 my-20">
          <div className="flex flex-col gap-10 col-span-5 row-1 bg-blue-700 px-[20px] py-3">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-bold">Overview</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum uenim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-bold text-xl ">
                More information
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="sticky top-2 bg-[#3b38386b] col-start-7 col-end-11 self-start px-5  py-8 rounded-2xl">
            <h3 className="text-white font-bold text-xl mb-4">Information</h3>
            <hr className=" border-0 bg-[#817d7d] h-[1px] w-full px-[10px]"></hr>
            <div className="mt-4 flex flex-col gap-6">
              <div>
                <p className="uppercase font-medium">Maturity Rating:</p>
                <p className="uppercase font-medium">TV - PG</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="uppercase">genres</p>
                <p className="font-light">
                  Docuseries, Science & Nature docs, Nature & Ecology, Science &
                  Nature TV, US TV shows
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="uppercase font-medium">Film Director:</p>
                <div className="flex justify-between gap-5 items-center w-fit">
                  <img
                    src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg"
                    alt=""
                    className="w-12 aspect-1/1 rounded-full"
                  />
                  <p className="font-light">John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MoreDocumentaries
          categories={LoadersData.categoriesData}
          params={params.name}
        />
        <Documentaries categories={filteredCategory} caption={extractedPath} />
        <hr className="border-0 bg-[#90909092] h-[0.5px]  mt-[50px]" />
        <Footer />
      </main>
    </>
  );
}
