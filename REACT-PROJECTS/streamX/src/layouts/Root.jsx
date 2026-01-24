import { Outlet, useLoaderData } from "react-router-dom";

import Header from "../components/HomeHeader";
import MainPage from "../pages/Main";
import ScrollToTop from "../components/ScrollToTop";
import { useRef } from "react";
// import FooterPage from "../components/Footer";

export default function Root() {
  //Have access to the returned value of the loader function that runs when we send request to the root url
  const HomePage = useLoaderData();
  console.log("root loaderDatas", HomePage);
  const sectionRefs = {
    popularRef: useRef(null),
    topRatedRef: useRef(null),
    upComingRef: useRef(null),
    tvGenreRef: useRef(null),
    movieGenreRef: useRef(null),
    nowPlayingRef: useRef(null),
  };

  const scrollToPopular = () => {
    const rect = sectionRefs.popularRef.current.getBoundingClientRect();
    console.log(
      "The Position of PopularMovie section with respect to viewport: ",
      rect.top
    );
    window.scrollTo({
      top: window.scrollY + rect.top - 80,
      behavior: "smooth",
    });
  };

  const scrollToTopRated = () => {
    const rect = sectionRefs.topRatedRef.current.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + rect.top - 80,
      behavior: "smooth",
    });
  };
  const scrollToNowPlaying = () => {
    const rect = sectionRefs.nowPlayingRef.current.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + rect.top - 80,
      behavior: "smooth",
    });
  };
  const scrollToMovies = () => {
    const rect = sectionRefs.movieGenreRef.current.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + rect.top - 80,
      behavior: "smooth",
    });
  };
  const scrollToTv = () => {
    const rect = sectionRefs.tvGenreRef.current.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + rect.top - 80,
      behavior: "smooth",
    });
  };
  const scrollToUpComing = () => {
    const rect = sectionRefs.upComingRef.current.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + rect.top - 80,
      behavior: "smooth",
    });
  };

  const scrollToSections = {
    scrollToTopRated,
    scrollToPopular,
    scrollToNowPlaying,
    scrollToUpComing,
    scrollToMovies,
    scrollToTv,
  };
  return (
    <>
    <ScrollToTop />
      <Header
        HomePageData={HomePage.data}
        scrollToSections={scrollToSections}
      />
      <main>
        <Outlet context={{ ...HomePage.data, sectionRefs }} />
      </main>
      {/* <FooterPage /> */}
    </>
  );
}
