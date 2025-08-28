import { Link } from "react-router-dom";
import NavBar from "../Reusable-Components/NavBar";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <>
      <div className="bg-black">
        <NavBar LoadersData />
      </div>
      <main>
        <section className=" flex justify-center items-center bg-[#000000] h-screen w-screen py-13 mb-[8em] ">
          <div className="absolute rounded-[25px] py-[60px] flex items-center flex-col gap-5 px-15 bg-[#1d1d1d] w-[40%] ">
            <div className="  flex flex-col gap-10 text-center  items-center w-[50]">
              <div className=" flex flex-col gap-4">
                <div className="relative  h-8 w-8  border-2 border-white rounded-[50%] ">
                  <div className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 h-10 w-12 border-2 border-white rounded-sm bg-[#1c1b1b]"></div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-[30px] tracking-wide font-sans leading-[1.2] font-stretch-extra-expanded font-bold">
                  Log in to your account
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum egestas
                </p>
              </div>
            </div>
            <form method="dialog">
              <input
                className=" w-full mb-5 h-20 px-4 text-md focus:bg-[#808080da]  focus:outline-none placeholder-white bg-[#2b2b2b] rounded-full "
                type="email"
                placeholder="example@yourmail.com "
              />
              <input
                className=" w-full mb-5 h-20 px-4 focus:bg-[#808080da] focus:outline-none placeholder-white text-md rounded-full shadow-sky-800 shodow-md/40 bg-[#2b2b2b]"
                type="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="bg-[#19a3ff] mb-3 h-20 px-4  text-xl shodow-md/40 w-full rounded-full font-bold text-white"
              >
                Login
              </button>
            </form>
            <div className="flex flex-col items-center">
              <Link to="/">Forgot your password?</Link>
              <p>
                You don’t have an account? <Link>Sign up</Link>
              </p>
            </div>
          </div>
        </section>

        <hr className="border-0 bg-[#90909092] h-[0.5px]" />
        <Footer />
      </main>
    </>
  );
}
