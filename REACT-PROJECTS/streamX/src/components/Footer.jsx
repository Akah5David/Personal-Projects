import logoImg from "../assets/svgs/logo.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <section className="h-screen w-screen pb-[50px] py-[100px] pr-[100px] pl-[50px] bg-black grid grid-cols-5 gap-7">
      <div className="flex flex-col  col-span-2">
        <div className="mb-[19px] gap-5 flex flex-col">
          <div className="flex gap-2 items-center min-w-max ">
            <img src={logoImg} alt="Logo" className="h-[60px] w-[30px] " />
            <h3 className="text-white font-bold font-serif text-[25px]">
              Streaming X
            </h3>
          </div>
          <div>
            <p> Copyright © Streaming X | Designed by</p>
            <p>
              <Link>David Akah</Link> - Powered by<Link> Android</Link>
            </p>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap w-60">
          <div>
            <svg
              fill="currentColor"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[25px] h-[25px]"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
              </g>
            </svg>
          </div>

          <div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[25px] h-[25px]"
            >
              <path d="M21.634 4.031c-.815.385-2.202 1.107-2.899 1.245-.027.007-.049.016-.075.023-.813-.802-1.927-1.299-3.16-1.299-2.485 0-4.5 2.015-4.5 4.5 0 .131-.011.372 0 .5-3.218 0-5.568-1.679-7.327-3.837-.235-.289-.485-.138-.537.068-.117.466-.157 1.245-.157 1.801 0 1.401 1.095 2.777 2.8 3.63-.314.081-.66.139-1.02.139-.424 0-.912-.111-1.339-.335-.158-.083-.499-.06-.398.344.405 1.619 2.253 2.756 3.904 3.087-.375.221-1.175.176-1.543.176-.136 0-.609-.032-.915-.07-.279-.034-.708.038-.349.582.771 1.167 2.515 1.9 4.016 1.928-1.382 1.084-3.642 1.48-5.807 1.48-.438-.01-.416.489-.063.674C3.862 19.504 6.478 20 8.347 20c7.43 0 11.653-5.663 11.653-11.001 0-.086-.002-.266-.005-.447.005-.018.01-.035.01-.053 0-.027-.008-.053-.008-.08-.003-.136-.006-.263-.009-.329.589-.425 1.491-1.163 1.947-1.728.155-.192.03-.425-.181-.352-.543.189-1.482.555-2.07.625 1.177-.779 1.759-1.457 2.259-2.21.155-.228-.059-.489-.32-.365z" />
            </svg>
          </div>

          <div>
            <svg
              viewBox="0 0 50 50"
              fill="currentColor"
              className="w-[25px] h-[25px]"
            >
              <path d="M16 3C8.83 3 3 8.83 3 16v18c0 7.17 5.83 13 13 13h18c7.17 0 13-5.83 13-13V16c0-7.17-5.83-13-13-13H16zm21 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM25 14c6.07 0 11 4.93 11 11s-4.93 11-11 11-11-4.93-11-11 4.93-11 11-11zm0 2c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9z" />
            </svg>
          </div>

          <div>
            <svg
              viewBox="0 0 461.001 461.001"
              fill="currentColor"
              className="w-[25px] h-[25px] "
            >
              <path d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zM300.506 237.056l-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.688 1.872 3.623 7.247-.109 9.082z" />
            </svg>
          </div>
          <div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[25px] h-[25px]"
            >
              <path
                d="M14,2 C15.1046,2 16,2.89543 16,4 C16,5.44733 17.03,6.6618 18.3984,6.93991 C19.4808,7.15992 20.1799,8.21575 19.9599,9.29819 C19.7399,10.3806 18.6841,11.0798 17.6016,10.8598 C17.0406,10.7457 16.5037,10.5646 16,10.3252 L16,16 C16,19.3137 13.3137,22 10,22 C6.68629,22 4,19.3137 4,16 C4,13.2015 5.91407,10.8551 8.50148,10.1891 C9.57119,9.91382 10.6616,10.5578 10.9369,11.6275 C11.2122,12.6972 10.5682,13.7876 9.49852,14.0629 C8.63547,14.285 8,15.0708 8,16 C8,17.1046 8.89543,18 10,18 C11.1046,18 12,17.1046 12,16 L12,4 C12,2.89543 12.8954,2 14,2 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 col-span-2">
        <h3 className="mt-2 text-xl font-bold">Pages(public)</h3>
        <div className=" grid grid-rows-7 grid-cols-2 gap-4">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/category/single">Category single</Link>
          <Link to="/Video single">Video single</Link>
          <Link to="/Pricing">Pricing</Link>
          <Link to="/Pricing single">Pricing single</Link>
          <Link to="/Director page">Director page</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Login">Login</Link>
          <Link to="/signup">signup</Link>
          <Link to="/Rest password">Rest password</Link>
          <Link to="/Update password">Update password</Link>
          <Link to="/Access denied">Access denied</Link>
          <Link to="/User Account">User Account</Link>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h3 className="mt-2 text-xl font-bold">Pages(Membership)</h3>
        <div className="flex flex-col gap-6 col-span-2">
          <Link to="/Home">Home</Link>
          <Link to="/Category single">Category single</Link>
          <Link to="/Video single">Video single</Link>
        </div>
      </div>

    </section>
  );
}
