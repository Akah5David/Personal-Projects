import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import logoImg from "../assets/svgs/logo.svg";
import profileImg from "../assets/svgs/profile.svg";
import ModalFooter from "./ModalFooter";
import CategoriesPage from "../components/DropMenuCategories";
import DocumentariesPage from "../components/DropMenuDocumentaries";
import CartModal from "../pages/CartPage";

export default function Header({ LoadersData }) {
  console.log("Subscribe LoadersData", LoadersData);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [pageMenuOpen, setPageMenuOpen] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [openDocumentariesMenu, setOpenDocumentariesMenu] = useState(false);
  const pageMenuCloseTimeout = useRef(null);
  const categoryMenuCloseTimeout = useRef(null);
  const documentariesMenuCloseTimeout = useRef(null);
  const cartModalRef = useRef(null);

  const categories = LoadersData?.categoriesData;
  console.log("subscribe categories", categories);

  function openCartModal() {
    cartModalRef.current?.open();
    setToggleModal(true);
  }

  function closeCartModal() {
    setToggleModal(false);
    cartModalRef.current?.close();
  }

  function handlePageMenuOpen() {
    if (pageMenuCloseTimeout.current) {
      clearTimeout(pageMenuCloseTimeout.current);
    }
    setPageMenuOpen(true);
  }

  function handlePageMenuClose() {
    pageMenuCloseTimeout.current = setTimeout(() => {
      setPageMenuOpen(false);
    }, 200);
  }

  function handleCategoryMenuOpen() {
    if (categoryMenuCloseTimeout.current) {
      clearTimeout(categoryMenuCloseTimeout.current);
    }
    setCategoryMenuOpen(true);
  }

  function handleCategoryMenuClose() {
    categoryMenuCloseTimeout.current = setTimeout(() => {
      setCategoryMenuOpen(false);
    }, 200);
  }

  function handleDocumentariesMenuOpen() {
    if (documentariesMenuCloseTimeout.current) {
      clearTimeout(documentariesMenuCloseTimeout.current);
    }
    setOpenDocumentariesMenu(true);
  }

  function handleDocumentariesMenuClose() {
    documentariesMenuCloseTimeout.current = setTimeout(() => {
      setOpenDocumentariesMenu(false);
    }, 200);
  }

  return (
    <>
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
              onMouseEnter={handleCategoryMenuOpen}
              onMouseLeave={handleCategoryMenuClose}
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
              onMouseEnter={handleDocumentariesMenuOpen}
              onMouseLeave={handleDocumentariesMenuClose}
              className="flex items-center gap-2 hover:hover:text-[#ffffff34]"
            >
              <Link to="/">Documentaries</Link>
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
              <Link
                to="/login"
                className="bg-[#c5c1c16b] py-2 px-4 rounded-full"
              >
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
      {categoryMenuOpen && (
        <div
          onMouseEnter={handleCategoryMenuOpen}
          onMouseLeave={handleCategoryMenuClose}
          className="fixed left-1/2 top-[80px] mt-4 -translate-x-1/2  z-50 pb-10 w-full bg-black opacity-98 "
        >
          <hr className="border-0 h-[1px] w-full bg-[grey]"></hr>
          <CategoriesPage categories={categories} />
        </div>
      )}

      {openDocumentariesMenu && (
        <div
          onMouseEnter={handleDocumentariesMenuOpen}
          onMouseLeave={handleDocumentariesMenuClose}
          className="fixed left-1/2 top-[80px] mt-3 opacity-[98%] -translate-x-1/2 z-50 bg-bg-[#3b38386b] w-full bg-black "
        >
          <hr className="border-0 h-[1px] w-full bg-[grey]"></hr>
          <DocumentariesPage categories={categories} />
        </div>
      )}
      {toggleModal && (
        <CartModal ref={cartModalRef} closeModalFn={closeCartModal} />
      )}
    </>
  );
}
