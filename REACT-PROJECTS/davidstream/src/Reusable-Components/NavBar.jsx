import { Link } from "react-router-dom";
import { useState } from "react";

import logoImg from "../assets/svgs/logo.svg";
import profileImg from "../assets/svgs/profile.svg";
import ModalFooter from "./ModalFooter";
import CategoriesPage from "../components/Categories";
import DocumentriesPage from "../components/Documentries";

export default function Header() {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [pageMenuOpen, setPageMenuOpe] = useState(false);
  const [openDocumetriesMenu, setOpenDocumetriesMenu] = useState(false);

  function handlePageMenuOpen() {
    setPageMenuOpe(true);
  }

  function handlePageMenuClose() {
    setPageMenuOpe(false);
  }

  function handleMenuOpen() {
    setCategoryMenuOpen(true);
  }

  function handleMenuClose() {
    setCategoryMenuOpen(false);
  }

  function handleDocumetriesMenuOpen() {
    setOpenDocumetriesMenu(true);
  }

  function handleDocumetriesMenuClose() {
    setOpenDocumetriesMenu(false);
  }
  return (
    <>
      {" "}
      <header className=" relative flex items-center gap-20 py-6 px-[50px]  text-white">
        <div className="flex gap-2 items-center min-w-max ">
          <img src={logoImg} alt="Logo" className="h-[60px] w-[30px] " />
          <h3 className="text-white font-bold font-serif text-[25px]">
            Streaming X
          </h3>
        </div>
        <nav className="flex-1  ">
          <ul className="flex justify-end items-center gap-5  min-w-max">
            <li className="hover:text-[grey]">
              <Link to="/">Home</Link>
            </li>
            <li
              onMouseEnter={handleMenuOpen}
              onMouseLeave={handleMenuClose}
              className="flex items-center gap-2 hover:text-[#ffffff34]"
            >
              <Link to="/">Categories</Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li
              onMouseEnter={handleDocumetriesMenuOpen}
              onMouseLeave={handleDocumetriesMenuClose}
              className="flex items-center gap-2 hover:hover:text-[#ffffff34]"
            >
              <Link to="/">Documenetries</Link>
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
              className="flex items-center gap-2 hover:hover:text-[#ffffff34]"
            >
              <Link to="/">Pages</Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
            <li>
              <Link to="/login">
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
      <div className="absolute left-1/2 opacity-[98%] -translate-x-1/2  z-50  bg-bg-[#3b38386b] w-[60%] ">
        {categoryMenuOpen && <CategoriesPage />}
        {pageMenuOpen && <ModalFooter />}
        {openDocumetriesMenu && <DocumentriesPage />}
      </div>
    </>
  );
}
