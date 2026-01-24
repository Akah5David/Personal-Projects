import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import logoImg from "../assets/svgs/logo.svg";
import profileImg from "../assets/svgs/profile.svg";

import ModalFooter from "./ModalFooter";
import NowPlayingMovies from "../components/NowPlayingMovies";
import PopularMovies from "../components/PopularMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import UpComingMovies from "../components/UpComingMovies";
import MovieGenres from "../components/MovieGenres";
import TvGenres from "../components/TvGenres";
import CartModal from "../pages/CartPage";

export default function Header({ LoadersData, scrollToSections }) {
  console.log("Subscribe LoadersData", LoadersData);
  const [movieMenuOpen, setMovieMenuOpen] = useState(false);
  const [tvMenuOpen, setTvMenuOpen] = useState(false);
  const [popularMenuOpen, setPopularMenuOpen] = useState(false);
  const [topRatedMenuOpen, setTopRatedMenuOpen] = useState(false);
  const [nowPlayingMenuOpen, setNowPlayingMenuOpen] = useState(false);
  const [upComingMenuOpen, setUpComingMenuOpen] = useState(false);
  const [pageMenuOpen, setPageMenuOpen] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [windowPosition, setWindowPosition] = useState(0);

  const pageMenuCloseTimeout = useRef(null);
  const movieMenuCloseTimeout = useRef(null);
  const tvMenuCloseTimeout = useRef(null);
  const topRatedMenuCloseTimeout = useRef(null);
  const upComingMenuCloseTimeout = useRef(null);
  const nowPlayingMenuCloseTimeout = useRef(null);
  const popularMenuCloseTimeout = useRef(null);
  const cartModalRef = useRef(null);

  const movieGenres = LoadersData?.movieGenres;
  const tvGenres = LoadersData?.tvGenres;
  const popularMovies = LoadersData?.popularMovies;
  const upComingMovies = LoadersData?.upComingMovies;
  const topRatedMovies = LoadersData?.topRatedMovies;
  const nowPlayingMovies = LoadersData?.nowPlayingMovies;

  //A function that opens the modal when the cart button is pressed
  function openCartModal() {
    cartModalRef.current?.open();
    setToggleModal(true);
  }

  //Functions that cancels the current reading time of set setTimeout when the mouse is place on the button and set the MenuOpen state to true causing the menu to appear
  function handlePageMenuOpen() {
    if (pageMenuCloseTimeout.current) {
      clearTimeout(pageMenuCloseTimeout.current);
    }
    setPageMenuOpen(true);
  }

  function handleMovieMenuOpen() {
    if (movieMenuCloseTimeout.current) {
      clearTimeout(movieMenuCloseTimeout.current);
    }
    setMovieMenuOpen(true);
  }
  function handleTvMenuOpen() {
    if (tvMenuCloseTimeout.current) {
      clearTimeout(tvMenuCloseTimeout.current);
    }
    setTvMenuOpen(true);
  }
  function handlePopularMenuOpen() {
    if (popularMenuCloseTimeout.current) {
      clearTimeout(popularMenuCloseTimeout.current);
    }
    setPopularMenuOpen(true);
  }
  function handleUpComingMenuOpen() {
    if (upComingMenuCloseTimeout.current) {
      clearTimeout(upComingMenuCloseTimeout.current);
    }
    setUpComingMenuOpen(true);
  }
  function handleTopRatedMenuOpen() {
    if (topRatedMenuCloseTimeout.current) {
      clearTimeout(topRatedMenuCloseTimeout.current);
    }
    setTopRatedMenuOpen(true);
  }
  function handleNowPlayingMenuOpen() {
    if (nowPlayingMenuCloseTimeout.current) {
      clearTimeout(nowPlayingMenuCloseTimeout.current);
    }
    setNowPlayingMenuOpen(true);
  }

  //Sets Each of the Menu to Close After 200 milliseconds of the Mouse being away from the Menu
  function handleMovieMenuClose() {
    movieMenuCloseTimeout.current = setTimeout(() => {
      setMovieMenuOpen(false);
    }, 200);
  }
  function handleTvMenuClose() {
    tvMenuCloseTimeout.current = setTimeout(() => {
      setTvMenuOpen(false);
    }, 200);
  }
  function handleNowPlayingMenuClose() {
    nowPlayingMenuCloseTimeout.current = setTimeout(() => {
      setNowPlayingMenuOpen(false);
    }, 200);
  }
  function handlePopularMenuClose() {
    popularMenuCloseTimeout.current = setTimeout(() => {
      setPopularMenuOpen(false);
    }, 200);
  }
  function handleTopRatedMenuClose() {
    topRatedMenuCloseTimeout.current = setTimeout(() => {
      setTopRatedMenuOpen(false);
    }, 200);
  }
  function handleUpComingMenuClose() {
    upComingMenuCloseTimeout.current = setTimeout(() => {
      setUpComingMenuOpen(false);
    }, 200);
  }

  function handlePageMenuClose() {
    pageMenuCloseTimeout.current = setTimeout(() => {
      setPageMenuOpen(false);
    }, 200);
  }

  //This function calls the close() method of the Modal element when a close button is pressed or when we press escape on the keyboard
  function closeCartModal() {
    setToggleModal(false);
    cartModalRef.current?.close();
  }

  // ! calculating the offsetTop of each of the sections
  // function calculateOffSet() {
  //   const rect = popularRef.current.getBoundingClientRect();
  //   console.log("rect Top" + rect.top);
  //   console.log("popularRef.current :" + popularRef.current);
  //   console.log("scrollY" + window.scrollY);
  //   window.scrollTo({
  //     top: window.scrollY + rect.top - 80,
  //     behavior: "smooth",
  //   });
  // }

  useEffect(() => {
    const handleScroll = () => {
      setWindowPosition(() => window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className=" fixed w-full z-99 flex items-center gap-20 py-6 px-[50px] bg-[#0000005e]  text-white">
        <div className="flex gap-2 items-center min-w-max ">
          <img src={logoImg} alt="Logo" className="h-[60px] w-[30px] " />
          <h3 className="text-white font-bold font-serif text-[25px]">
            Streaming X
          </h3>
          {/* <h3>{windowPosition}</h3> */}
        </div>
        <nav className="flex-1  ">
          <ul className="flex justify-end items-center gap-5  min-w-max">
            <li className="hover:text-[grey]">
              <Link to="/">Home</Link>
            </li>
            <li
              onMouseEnter={handleNowPlayingMenuOpen}
              onMouseLeave={handleNowPlayingMenuClose}
              className="flex items-center gap-2 hover:text-[#ffffff34]"
            >
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSections.scrollToNowPlaying();
                }}
              >
                NowPlaying
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li
              onMouseEnter={handlePopularMenuOpen}
              onMouseLeave={handlePopularMenuClose}
              className="flex items-center gap-2 hover:hover:text-[#ffffff34]"
            >
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSections.scrollToPopular();
                }}
              >
                Popular
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li
              onMouseEnter={handleTopRatedMenuOpen}
              onMouseLeave={handleTopRatedMenuClose}
              className="flex items-center gap-2 hover:text-[#ffffff34]"
            >
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSections.scrollToTopRated();
                }}
              >
                Top Rated
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li
              onMouseEnter={handleUpComingMenuOpen}
              onMouseLeave={handleUpComingMenuClose}
              className="flex items-center gap-2 hover:hover:text-[#ffffff34]"
            >
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSections.scrollToUpComing();
                }}
              >
                Up Coming
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li
              onMouseEnter={handleMovieMenuOpen}
              onMouseLeave={handleMovieMenuClose}
              className="flex items-center gap-2 hover:hover:text-[#ffffff34]"
            >
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSections.scrollToMovies();
                }}
              >
                Movies
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li
              onMouseEnter={handleTvMenuOpen}
              onMouseLeave={handleTvMenuClose}
              className="flex items-center gap-2 hover:hover:text-[#ffffff34]"
            >
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSections.scrollToTv();
                }}
              >
                Tv
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li
              onMouseEnter={handlePageMenuOpen}
              onMouseLeave={handlePageMenuClose}
              className="relative hover:text-[#ffffff34]"
            >
              <div className="flex items-center gap-2">
                <Link to="/">Pages</Link>
                <svg
                  fill="currentColor"
                  viewBox="0 0 30.727 30.727"
                  className="w-[11px] h-[12px] font-serif"
                >
                  <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>
                </svg>
              </div>
            </li>

            <li>
              <button className="cursor-pointer" onClick={openCartModal}>
                Cart
              </button>
            </li>
            <li>
              <Link to="/auth/login">
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
              <Link to="/" className="bg-[#c5c1c16b] py-2 px-4 rounded-full">
                Log Out
              </Link>
            </li>
            <li>
              <Link
                to="/subscribe"
                className="bg-[#19a3ff] py-2 px-4 rounded-full font-medium text-white"
              >
                Subscribe
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {pageMenuOpen && (
        <div
          onMouseEnter={handlePageMenuOpen}
          onMouseLeave={handlePageMenuClose}
          className="fixed top-[80px] mt-4 left-1/2 -translate-x-1/2 z-50  bg-black opacity-90 w-[60%] rounded-md shadow-lg"
        >
          <ModalFooter />
        </div>
      )}
      {/* {nowPlayingMenuOpen && (
        <div
          onMouseEnter={handleNowPlayingMenuOpen}
          onMouseLeave={handleNowPlayingMenuClose}
          className="fixed left-1/2 top-[80px] mt-4 -translate-x-1/2  z-50 pb-10 w-full bg-black opacity-98 "
        >
          <hr className="border-0 h-[1px] w-full bg-[grey]"></hr>
          <NowPlayingMovies
            ref={nowPlayingRef}
            nowPlayingMovies={nowPlayingMovies}
          />
        </div>
      )}
      {upComingMenuOpen && (
        <div
          onMouseEnter={handleUpComingMenuOpen}
          onMouseLeave={handleUpComingMenuClose}
          className="fixed left-1/2 top-[80px] mt-4 -translate-x-1/2  z-50 pb-10 w-full bg-black opacity-98 "
        >
          <hr className="border-0 h-[1px] w-full bg-[grey]"></hr>
          <UpComingMovies ref={upComingRef} upComingMovies={upComingMovies} />
        </div>
      )}
      {topRatedMenuOpen && (
        <div
          onMouseEnter={handleTopRatedMenuOpen}
          onMouseLeave={handleTopRatedMenuClose}
          className="fixed left-1/2 top-[80px] mt-4 -translate-x-1/2  z-50 pb-10 w-full bg-black opacity-98 "
        >
          <hr className="border-0 h-[1px] w-full bg-[grey]"></hr>
          <TopRatedMovies ref={topRatedRef} topRatedMovies={topRatedMovies} />
        </div>
      )}
      {popularMenuOpen && (
        <div
          onMouseEnter={handlePopularMenuOpen}
          onMouseLeave={handlePopularMenuClose}
          className="fixed left-1/2 top-[80px] mt-3 opacity-[98%] -translate-x-1/2 z-50 bg-bg-[#3b38386b] w-full bg-black "
        >
          <hr className="border-0 h-[1px] w-full bg-[grey]"></hr>
          <PopularMovies
            popularRef={popularRef}
            popularMovies={popularMovies}
          />
        </div>
      )}
      {movieMenuOpen && (
        <div
          onMouseEnter={handleMovieMenuOpen}
          onMouseLeave={handleMovieMenuClose}
          className="fixed left-1/2 top-[80px] mt-3 opacity-[98%] -translate-x-1/2 z-50 bg-bg-[#3b38386b] w-full bg-black "
        >
          <hr className="border-0 h-[1px] w-full bg-[grey]"></hr>
          <MovieGenres ref={movieGenreRef} movieGenres={movieGenres} />
        </div>
      )}
      {tvMenuOpen && (
        <div
          onMouseEnter={handleTvMenuOpen}
          onMouseLeave={handleTvMenuClose}
          className="fixed left-1/2 top-[80px] mt-3 opacity-[98%] -translate-x-1/2 z-50 bg-bg-[#3b38386b] w-full bg-black "
        >
          <hr className="border-0 h-[1px] w-full bg-[grey]"></hr>
          <TvGenres ref={tvGenreRef} tvGenres={tvGenres} />
        </div>
      )} */}
      {toggleModal && (
        <CartModal ref={cartModalRef} closeModalFn={closeCartModal} />
      )}
    </>
  );
}
