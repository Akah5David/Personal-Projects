import { useEffect } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useParams,
  useRevalidator,
} from "react-router-dom";

import NavBar from "../reusable_components/NavBar";
import SubscribeButton from "../reusable_components/SubscribeButton";
import Others from "../reusable_components/Others";
import Footer from "../components/Footer";

const GENRE_LABELS = {
  "Science Fiction": "Sci-Fi",
  "Television Movie": "TV Movie",
};

export default function ViewVideoPage() {
  const LoadersData = useLoaderData();
  const revalidator = useRevalidator();
  const { id } = useParams();

  //! create a custom hook to handle the revalidation issue
  useEffect(() => {
    if (revalidator.state === "idle") {
      revalidator.revalidate();
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [LoadersData]);



  const { hero, topRated } = LoadersData;

  let date;

  if (hero.release_date) {
    date = "release_date";
  }

  if (hero.first_air_date) {
    date = "first_air_date";
  }

  let year_of_release = hero[date].split("-")[0];
  let minutes = hero.runtime % 60;
  let hours = Math.trunc(hero.runtime / 60);
  let rating = hero["vote_average"].toFixed(1);

  // ! formatting the genre_ids
  const formattedGenres = hero.genres.map(
    (genre) => GENRE_LABELS[genre] ?? genre,
  );
  console.log("FormattedGenres: ", formattedGenres);

  const maturity_rating = hero["release_dates"].results
    .map((result) => {
      const RD_object = result["release_dates"][0];
      return {
        iso_3166_1: result["iso_3166_1"],
        release_dates: [
          {
            certification: RD_object.certification,
            release_date: RD_object["release_date"],
          },
        ],
      };
    })
    .filter(
      (rating) => rating?.release_dates?.[0]?.certification?.trim() !== "",
    );

  //* Making the Maturity rating array to contain objects with two key-value types certification and release_date
  const formattedRating = maturity_rating.map((rating) => {
    return {
      certification: rating["release_dates"][0].certification,
      release_date: rating["release_dates"][0].release_date,
    };
  });

  //* creating an array that contains only values of certification key for every rating in the formattedRating and using splice() to limit the number of elements that the final array will contain and using join(", ") to convert to a string and separating each string with a comma ",", when a uniqueArray is derived using Set() constructor
  const ratingArray = formattedRating.map((rating) => rating.certification);
  const uniqueRating = [...new Set(ratingArray)];
  const finalRating = uniqueRating.splice(0, 5).join(", ");

  //* creating an array that contains only values of certification key for every rating in the formattedRating and using splice() to limit the number of elements that the final array will contain and using join(", ") to convert to a string and separating each string with a comma ",", when a uniqueArray is derived using Set() constructor
  const releaseDateArray = formattedRating.map(
    (rating) => rating["release_date"],
  );
  const uniqueDate = [...new Set(releaseDateArray)];
  const releaseDate = uniqueDate[0];

  const formattedReleaseDate = new Date(releaseDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const movieDirector = hero.credits.crew.find(
    (crew) => crew.job === "Director" && {},
  );
  console.log("movieDirector: ", movieDirector["profile_path"]);

  const castsArray = hero.credits.cast.map((cast) => {
    return {
      id: cast.id,
      original_name: cast["original_name"],
      profile_path: cast["profile_path"],
      character: cast.character,
    };
  });

  const formattedCastsArray = castsArray.filter((cast) => {
    const character = cast?.character || "";
    const profilePath = cast?.profile_path;

    return (
      !character.toLowerCase().includes("(uncredited)") &&
      profilePath !== null &&
      profilePath !== ""
    );
  });

  console.log("castArray: ", formattedCastsArray);

  return (
    <>
      <header className=" w-screen h-screen">
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
        <section className="flex flex-col gap-18 my-20  bg-green-600">
          <div className="relative w-full grid grid-cols-10 bg-pink-900 py-5 pr-8 pl-4">
            <div className="flex flex-col gap-10 col-span-5 row-1 rounded-2xl bg-blue-700 px-[15px] py-3">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
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
                        className="text-lg font-semibold flex items-center"
                      >
                        {genre}
                        <span className="inline-block mx-1.5 w-1.5 h-1.5 bg-white rounded-full"></span>
                      </span>
                    ))}

                    <span className="text-lg font-semibold">
                      {hours}h {minutes}m
                    </span>
                  </p>
                </div>
                <p className="text-base font-medium">{hero.overview}</p>
                <p className="text-base font-medium">
                  As ancient codes collide with advanced technology, survival
                  becomes more than a hunt—it becomes a test of identity,
                  loyalty, and evolution.
                </p>
              </div>
            </div>
            <div className="sticky top-2 bg-[#3b38386b] col-start-7 col-end-11 self-start pl-5 pr-10 py-8 rounded-2xl">
              <h3 className="text-white font-bold text-xl mb-4">
                More Information
              </h3>
              <hr className=" border-0 bg-[#817d7d] h-[1px] w-full px-[10px]"></hr>
              <div className="mt-4 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="uppercase font-extrabold">
                    maturity rating:{" "}
                    <span className="font-normal capitalize ml-2">
                      certification ({finalRating})
                    </span>
                  </p>
                  <p className="uppercase font-extrabold">
                    release date:{" "}
                    <span className="font-normal capitalize ml-2">
                      {formattedReleaseDate}
                    </span>
                  </p>
                  <p className="uppercase font-extrabold">
                    genres:{" "}
                    <span className="font-normal capitalize ml-2">
                      {hero.genres.join(", ")}
                    </span>
                  </p>
                  <p className="uppercase font-extrabold">
                    production country:{" "}
                    <span className="font-normal capitalize ml-2">
                      {hero["origin_country"]}
                    </span>
                  </p>
                  <p className="uppercase font-extrabold">
                    production company:{" "}
                    <span className="font-normal capitalize ml-2">
                      {hero["production_companies"][0].name}
                    </span>
                  </p>
                  <p className="uppercase font-extrabold">
                    film director:
                    <span className="font-normal capitalize ml-2">
                      {movieDirector["original_name"]}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-screen h-screen  px-4">
            <p className=" uppercase font-extrabold text-5xl">top cast </p>
            <ul className="mt-6 flex gap-4 overflow-scroll scrollbar-hide">
              {formattedCastsArray.map((cast) => (
                <li className="flex flex-col gap-5 " key={cast.id}>
                  <div className=" w-[260px] aspect-1/1 ">
                    <img
                      src={`https://image.tmdb.org/t/p/original${cast["profile_path"]}`}
                      alt={`${cast["original_name"]}`}
                    ></img>
                  </div>
                  <div className="text-center text-xl font-semibold">
                    <p>{cast["original_name"]}</p>
                    <p>as</p>
                    <p>{cast.character}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Others others={topRated} section="top_rated" />
        <hr className="border-0 bg-[#90909092] h-[0.5px]  mt-[50px]" />
        <Footer />
      </main>
    </>
  );
}
