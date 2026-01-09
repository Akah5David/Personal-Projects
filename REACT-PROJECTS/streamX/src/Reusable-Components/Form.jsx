import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

import NavBar from "./NavBar";
import Footer from "../components/Footer";
import logoImg from "../assets/svgs/logo.svg";
import movieCollage from "../assets/photos/movie-collage.png";

export default function LoginPage({ authType }) {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigateTo = useNavigate();

  async function handleForm(e) {
    e.preventDefault(); // Prevent the default form submission behavior(page reload)

    const enteredUsername = usernameRef.current?.value;
    const enteredEmail = emailRef.current?.value;
    const enteredPassword = passwordRef.current?.value;

    let bodyObject = {};
    let navigatePath = "";

    if (authType === "signup") {
      bodyObject = {
        userName: enteredUsername,
        userEmail: enteredEmail,
        userPassword: enteredPassword,
      };
      navigatePath = "/auth/login";
    }

    if (authType === "login") {
      bodyObject = {
        userEmail: enteredEmail,
        userPassword: enteredPassword,
      };
      navigatePath = "/";
    }

    if (authType === "reset-password") {
      bodyObject = {
        userEmail: enteredEmail,
      };
      navigatePath = "/auth/login";
    }

    try {
      const response = await fetch(`http://localhost:3000/auth/${authType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyObject),
      });

      if (!response.ok) {
        throw new Error(`${authType} Request failed!`);
      }

      const data = await response.json();
      console.log("Response data: ", data);

      usernameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";

      navigateTo(navigatePath, { replace: true });
    } catch (err) {
      console.log("Error: ", err);
      
    }
  }
  return (
    <>
      <main>
        <section
          className={` ${
            authType === "login" || authType === "reset-password"
              ? "flex justify-center py-13 mb-[4.5em]"
              : "grid grid-cols-12 grid-rows-1 gap-10 h-screen"
          }   bg-[#000000] w-screen `}
        >
          {authType === "signup" && (
            <div className="col-span-6 row-auto ">
              <img src={movieCollage} alt="logo" className="w-full h-full" />
            </div>
          )}
          <>
            <div
              className={`flex flex-col gap-5 px-15 ${
                authType === "login" || authType === "reset-password"
                  ? "items-center w-[60%] rounded-[25px] py-[60px] bg-[#3b38386b] "
                  : "items-start col-start-7 col-end-13 row-auto"
              } `}
            >
              <div
                className={` flex flex-col gap-10 ${
                  authType === "login" || authType === "reset-password"
                    ? "items-center"
                    : "items-start"
                } w-[50]`}
              >
                {(authType === "login" || authType === "reset-password") && (
                  <div className=" flex flex-col gap-4">
                    <div className="relative  h-8 w-8  border-2 border-white rounded-[50%] ">
                      <div className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 h-10 w-12 border-2 border-white rounded-sm bg-[#1c1b1b]"></div>
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-5 text-center">
                  {authType === "login" && (
                    <>
                      <h2 className="text-[30px] tracking-wide font-sans leading-[1.2] font-stretch-extra-expanded font-bold">
                        Log in to your account
                      </h2>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        id venenatis pretium risus euismod dictum egestas
                      </p>
                    </>
                  )}
                  {authType === "reset-password" && (
                    <>
                      <h2 className="text-[30px] tracking-wide font-sans leading-[1.2] font-stretch-extra-expanded font-bold">
                        Reset Password
                      </h2>
                      <p>
                        Enter the email address associated with your account for
                        this website to start the password reset process.
                      </p>
                    </>
                  )}

                  {authType === "signup" && (
                    <>
                      <div className="flex gap-2 items-center min-w-max">
                        <img
                          src={logoImg}
                          alt="Logo"
                          className="h-[60px] w-[30px] "
                        />
                        <h3 className="text-white font-bold font-serif text-[25px]">
                          Streaming X
                        </h3>
                      </div>
                      <h2 className="  text-[30px] tracking-wide font-sans leading-[1.2] font-stretch-extra-expanded font-bold">
                        Sign up to watch the greatest documentaries
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        id venenatis pretium risus euismod dictum egestas
                      </p>
                    </>
                  )}
                </div>
              </div>
              <form
                method="dialog"
                onSubmit={handleForm}
                action={`auth/${authType}`}
              >
                {authType === "signup" && (
                  <input
                    className=" w-full mb-5 h-20 px-4 text-md focus:bg-[#808080da]  focus:outline-none placeholder-white bg-[#2b2b2b] rounded-full "
                    type="text"
                    name="username"
                    placeholder="Full Name"
                    defaultValue=""
                    ref={usernameRef}
                  />
                )}
                <input
                  className=" w-full mb-5 h-20 px-4 text-md focus:bg-[#808080da]  focus:outline-none placeholder-white bg-[#2b2b2b] rounded-full "
                  type="email"
                  name="userEmail"
                  placeholder="example@yourmail.com "
                  defaultValue=""
                  ref={emailRef}
                />
                {(authType === "login" || authType === "signup") && (
                  <input
                    className=" w-full mb-5 h-20 px-4 focus:bg-[#808080da] focus:outline-none placeholder-white text-md rounded-full shadow-md/40 bg-[#2b2b2b]"
                    type="password"
                    name="userPassword"
                    placeholder="Password"
                    defaultValue=""
                    ref={passwordRef}
                  />
                )}
                <button
                  type="submit"
                  className="bg-[#19a3ff] mb-3 h-20 px-4  text-xl shadow-md/40 w-full rounded-full font-bold text-white"
                >
                  {authType === "login" && "login"}
                  {authType === "signup" && "Sign Up"}
                  {authType === "reset-password" && "Send password reset email"}
                </button>
              </form>
              {authType === "login" && (
                <div className="flex flex-col items-center">
                  <Link
                    to="/auth/reset-password"
                    className="underline decoration-1"
                  >
                    Forgot your password?
                  </Link>
                  <p>
                    You don’t have an account?{" "}
                    <Link to="/auth/signup" className="underline decoration-1">
                      Sign up
                    </Link>
                  </p>
                </div>
              )}
              {authType === "reset-password" && (
                <p className="w-full text-center">
                  You don’t have an account?{" "}
                  <Link to="/auth/signup" className="underline decoration-1">
                    Sign up
                  </Link>
                </p>
              )}
              {authType === "signup" && (
                <p className="w-full text-center">
                  Already have an account?{" "}
                  <Link to="/auth/login" className="underline decoration-1">
                    Log In
                  </Link>
                </p>
              )}
            </div>
          </>
        </section>
      </main>
    </>
  );
}
