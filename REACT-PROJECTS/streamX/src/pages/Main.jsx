import { useLoaderData, useOutletContext } from "react-router-dom";

import NowPlayingMovies from "../components/NowPlayingMovies";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import UpComingMovies from "../components/UpComingMovies";
import MovieGenres from "../components/MovieGenres";
import TvGenres from "../components/TvGenres";
import AvailablePage from "../components/Available";
import QuestionsPage from "../components/Questions";
import PlatformPage from "../components/Platform.jsx";
import FooterPage from "../components/Footer";
import SubscriptionPage from "../components/Subscription.jsx";

export default function MainPage() {
  const homePage = useOutletContext();
  const questions = useLoaderData();
  const sectionRefs = homePage.sectionRefs;

  console.log("HomePage Data: ", homePage);
  console.log("Questions: ", questions);

  const movieData = homePage.movie;
  const tvData = homePage.tv;

  return (
    <div className="  min-w-screen min-h-screen max-w-screen max-h-screen">
      <NowPlayingMovies
        nowPlayingRef={sectionRefs.nowPlayingRef}
        nowPlayingMovies={movieData.nowPlayingMovies}
      />
      <PopularMovies
        popularRef={sectionRefs.popularRef}
        popularMovies={movieData.popularMovies}
      />
      <TopRatedMovies
        topRatedRef={sectionRefs.topRatedRef}
        topRatedMovies={movieData.topRatedMovies}
      />
      <UpComingMovies
        upComingRef={sectionRefs.upComingRef}
        upComingMovies={movieData.upComingMovies}
      />
      <MovieGenres
        movieGenreRef={sectionRefs.movieGenreRef}
        movieGenres={movieData.movieGenres}
      />
      <TvGenres
        tvGenreRef={sectionRefs.tvGenreRef}
        tvGenres={tvData.tvGenres}
      />
      {/* <DocumentariesPage categories={homePage} /> */}
      <SubscriptionPage />
      <AvailablePage />
      <hr className="border-0 bg-[#817d7d] h-[1px] mx-[50px]" />
      <QuestionsPage Questions={questions} />
      <PlatformPage />
      <FooterPage />
    </div>
  );
}
