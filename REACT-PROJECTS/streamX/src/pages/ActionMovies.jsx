import { useEffect } from "react";
import { Link, useParams, useLoaderData, useLocation } from "react-router-dom";

import NavBar from "../Reusable-Components/NavBar";
import Actions from "../components/Action";
import SubscribeButton from "../Reusable-Components/SubscribeButton";
import Documentaries from "../components/Documentaries";
import MoreDocumentaries from "../Reusable-Components/MoreDocumentaries";
import Footer from "../components/Footer";

const GENRE_LABELS = {
  "Science Fiction": "Sci-Fi",
  "Television Movie": "TV Movie",
};

export default function ViewVideoPage() {
  const params = useParams();
  const LoadersData = useLoaderData();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //converting the pathname in string format into an array
  const extractedPath = location.pathname.split("/")[1];
  console.log("extractedPath", extractedPath);

  const { hero, actionMovies } = LoadersData;

  let year_of_release = hero["release_date"].split("-")[0];
  let minutes = hero.runtime % 60;
  let hours = Math.trunc(hero.runtime / 60);
  let rating = hero["vote_average"].toFixed(1);

  // ! formatting the genre_ids
  const formattedGenres = hero.genre_ids.map(
    (genre) => GENRE_LABELS[genre] ?? genre
  );
  console.log("FormattedGenres: ", formattedGenres);

  // ! converting an array to a string
  const genreLine = formattedGenres.join(".");
  return (
    <>
      <header className="m-[80] w-screen h-screen">
        <div className=" relative w-full h-full bg-orange-700">
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/10 via-black/20 to-black/50"></div>
          <div
            className="bg-no-repeat bg-center bg-cover inset-0 absolute z-10 bg-local"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${hero.backdrop_path})`,
            }}
          ></div>
          <div className="absolute z-30 inset-0">
            <NavBar LoadersData={LoadersData} />
            <div className="relative flex flex-col gap-9 top-[39%] left-[4%] w-[50%] py-[30px] text-left ">
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-white text-[60px] font-bold">
                    {hero.title}
                  </h1>
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span className="text-2xl">⭐</span>
                    <span className="text-2xl">{rating}</span>
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="text-2xl">{year_of_release}</span>
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="text-2xl">
                      {hours}h {minutes}m
                    </span>
                  </h3>
                </div>
                <p className="text-white text-[20px] line-clamp-3">
                  {hero.overview}
                </p>
              </div>
              <div className="w-full flex items-center gap-10">
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
        <section className="relative w-full grid grid-cols-10 bg-pink-900 py-5 my-20 pr-15 pl-11">
          <div className="flex flex-col gap-10 col-span-5 row-1 bg-blue-700 px-[15px] py-3">
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-2xl font-bold">
                  {hero.title}
                  <span> ({year_of_release})</span>
                </h3>
                <p className="flex items-center gap-1 font-medium">
                  <span className="text-lg">⭐</span>
                  <span className="text-lg">{rating}</span>
                  <span className="inline-block mx-1 w-1.5 h-1.5 bg-white rounded-full"></span>
                  {formattedGenres.map((genre, index) => (
                    <span
                      key={index}
                      className="text-lg flex items-center"
                    >
                      {genre}
                      <span className="inline-block mx-1.5 w-1.5 h-1.5 bg-white rounded-full"></span>
                    </span>
                  ))}
                  
                  <span className="text-lg">
                    {hours}h {minutes}m
                  </span>
                </p>
              </div>
              <p className = "text-sm">{hero.overview}</p>
              <p className = "text-sm">
                As ancient codes collide with advanced technology, survival
                becomes more than a hunt—it becomes a test of identity, loyalty,
                and evolution.
              </p>
            </div>
          </div>
          <div className="sticky top-2 bg-[#3b38386b] col-start-7 col-end-11 self-start pl-5 pr-10 py-8 rounded-2xl">
            <h3 className="text-white font-bold text-xl mb-4">
              More Information
            </h3>
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
        <Actions actionMovies={actionMovies} />
        <hr className="border-0 bg-[#90909092] h-[0.5px]  mt-[50px]" />
        <Footer />
      </main>
    </>
  );
}

// <header>
//   <div className=" relative w-screen h-screen bg-orange-700">
//     <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/90 to-black/100"></div>
//     <div className="bg-[url(/images/background.jpeg)] bg-no-repeat bg-center bg-cover inset-0 absolute z-10 bg-local"></div>
//     <div className="absolute z-30 inset-0">
// <NavBar
//   LoadersData={HomePageData}
//   scrollToSections={scrollToSections}
// />
//       <div className="relative ml-[50px] my-[100px] w-[50%] pb-[30px] text-left ">
//         <h1 className="text-white text-[60px] font-bold">
//           Unlimited Animals documentaries in 4k
//         </h1>
//         <p className="text-white text-[20px]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit massa a
//           netus elit cursus eget viverra vitae risus nunc facilisis feugiat.
//         </p>
//         <div className="w-full mt-[40px] flex items-center gap-10">
//           <SubscribeButton btnAction="Subscribe today!" />
//           <Link
//             to="/"
//             className="bg-[#c5c1c16b] py-4 px-4 rounded-full font-medium text-white"
//           >
//             Explore documentaries
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>

// {
//   (" ");
// }
// <header className="m-[80] w-screen h-screen">
//   <div className=" relative w-full h-full bg-orange-700">
//     <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-black/40 to-black/100"></div>
//     <div
//       className="bg-no-repeat bg-center bg-cover inset-0 absolute z-10 bg-local"
//       style={{
//         backgroundImage: `url(https://image.tmdb.org/t/p/original/${hero.backdrop_path})`,
//       }}
//     ></div>
//     <div className="absolute z-30 inset-0">
//       <NavBar LoadersData={LoadersData} />
//       <div className="relative ml-[50px] my-[100px] w-[50%] pb-[30px] text-left ">
//         <h6 className="uppercase text-xl text-white">
//           Popular on Savanna documentaries
//         </h6>
//         <h1 className="text-white text-[60px] font-bold">
//           The Eye of The Leopard
//         </h1>
//         <p className="text-white text-[20px]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit massa a netus
//           elit cursus eget viverra vitae risus nunc facilisis feugiat.
//         </p>
//         <div className="w-full mt-[40px] flex items-center gap-10">
//           <SubscribeButton
//             btnAction="Watch now"
//             className="hover:bg-white hover:text-blue-700"
//           />
//           <Link
//             to="/"
//             className="bg-[#c5c1c16b] py-4 px-4 rounded-full font-medium text-white hover:bg-blue-400"
//           >
//             watch trailer
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>;
