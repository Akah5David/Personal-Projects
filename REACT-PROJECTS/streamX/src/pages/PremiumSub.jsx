import SubscribeButton from "../Reusable-Components/SubscribeButton";
import QuestionsPage from "../components/Questions";
import Footer from "../components/Footer";
import { Link, useLoaderData } from "react-router-dom";
import NavBar from "../Reusable-Components/NavBar";

export default function PremiumSubscribePage() {
  const LoadersData = useLoaderData();
  console.log("subscribe loadersData", LoadersData);
  const { questionsData } = LoadersData;
  console.log(" Subscribe QuestionDatas", questionsData);
  return (
    <>
      <div className="bg-black">
        <NavBar LoadersData={LoadersData} />
      </div>
      <main className="w-screen h-auto bg-black ">
        <section className="relative grid grid-cols-10 grid-rows-1 py-[5em] gap-15 w-full">
          <div className=" col-span-5 flex flex-col gap-17 pb-[4em] pl-[2em] rounded-3xl ">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col justify-between gap-5">
                {/* <h2 className="text-[60px] font-sans leading-[1.2]  font-stretch-extra-expanded font-bold">
                $9.99
              </h2> */}
                <h2 className="text-[2.5em] font-sans leading-[1]  font-stretch-extra-expanded font-medium">
                  Premium
                </h2>

                <p className="text-left text-xl ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit tortor
                  eu egestas morbi sem vulputate etiam facilisis pellentesque ut
                  quis.
                </p>
              </div>

              <div className="grid grid-cols-2 grid-rows-3 gap-3">
                <div className="flex  items-center gap-4 ">
                  <div className="  items-center flex flex-col">
                    <div className="relative w-[40px] h-[40px] rounded-[50%] border-2 border-white   ">
                      <div className="absolute left-[40%] bottom-1/4 -translate-x-1/6 self-center flex flex-col rotate-45 ">
                        <div className="h-[13px] w-[2px] bg-white"></div>
                        <hr className="h-[2px] shadow-md/40 border-0 rounded-full  bg-[white] w-[20px] " />
                      </div>
                    </div>
                  </div>
                  <p className="text-left text-xl  ">Unlimited Access</p>
                </div>

                <div className="flex items-center gap-4 py-[1em]">
                  <div className="flex flex-col items-center">
                    <div className=" relative z-10 w-[40px] border-2 h-[30px] border-[white]   rounded-[2px] ">
                      <div className="absolute z-20 -right-1/5 -top-1/3 border-2 h-[25px] aspect-3/4 rounded-md bg-[#272626] border-[white] shadow-md/40 "></div>
                    </div>
                    <div className="rounded-full relative z-20 bottom-[7px] h-[7px] w-[50px] border-2 bg-[#272626] "></div>
                  </div>

                  <p className="text-left text-xl ">Available in All Platform</p>
                </div>

                <div className="flex items-center gap-4 ">
                  <svg
                    fill="#ffffff"
                    viewBox="0 0 512.001 512.001"
                    className="w-[40px] h-[60px]"
                  >
                    <path d="M511.324,194.019c-1.763-5.195-6.643-8.696-12.128-8.696H322.848L268.227,8.55c-3.305-10.749-21.157-10.749-24.453,0 l-54.62,176.773H12.806c-5.494,0-10.365,3.492-12.128,8.696s-0.008,10.953,4.352,14.275l143.216,109.369L93.481,494.939 c-1.652,5.323,0.332,11.098,4.897,14.275c4.574,3.151,10.663,3.049,15.101-0.324l142.526-108.9l142.518,108.9 c2.3,1.746,5.042,2.623,7.776,2.623c2.564,0,5.127-0.775,7.333-2.3c4.557-3.177,6.55-8.952,4.897-14.275l-54.765-177.276 l143.207-109.369C511.332,204.972,513.087,199.223,511.324,194.019z M341.125,302.732c-4.259,3.254-6.03,8.824-4.446,13.951 l45.575,147.551l-118.474-90.52c-2.3-1.746-5.042-2.623-7.776-2.623c-2.742,0-5.477,0.877-7.785,2.632l-118.474,90.52 l45.575-147.551c1.593-5.127-0.187-10.698-4.446-13.951l-120.22-91.823h147.943c5.613,0,10.57-3.654,12.222-9.028l45.183-146.222 l45.192,146.214c1.644,5.374,6.609,9.028,12.222,9.028h147.926L341.125,302.732z"></path>
                  </svg>
                  <p className="text-left text-xl  ">Exclusive Content</p>
                </div>

                <div className="flex  items-center gap-4">
                  <div className="flex justify-center items-center rounded-[50%] w-[40px] p-1 h-[40px] border-2 border-white">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="w-[40px] h-[40px] text-white font-extrabold stroke-4 stroke-white"
                    >
                      <path d="M202.82812,146.82812l-72,72a3.99853,3.99853,0,0,1-5.65625,0l-72-72a3.99957,3.99957,0,0,1,5.65625-5.65625L124,206.34277V40a4,4,0,0,1,8,0V206.34277l65.17187-65.1709a3.99957,3.99957,0,0,1,5.65625,5.65625Z"></path>
                    </svg>
                  </div>
                  <p className="text-left text-xl  ">Downloadable Content</p>
                </div>

                <div className="flex items-center gap-4 ">
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[50px] h-[60px]"
                  >
                    <path
                      d="M472,60h-8V44c0-13.234-10.766-24-24-24s-24,10.766-24,24v16H96V44c0-13.234-10.766-24-24-24S48,30.766,48,44v16h-8
    C17.944,60,0,77.944,0,100v352c0,22.056,17.944,40,40,40h432c22.056,0,40-17.944,40-40V100C512,77.944,494.056,60,472,60z 
    M472,476H40c-13.234,0-24-10.766-24-24V148h384c4.418,0,8-3.582,8-8s-3.582-8-8-8H16v-32c0-13.234,10.766-24,24-24h8v16
    c0,13.234,10.766,24,24,24s24-10.766,24-24V76h320v16c0,13.234,10.766,24,24,24s24-10.766,24-24V76h8c13.234,0,24,10.766,24,24v32h-16
    c-4.418,0-8,3.582-8,8s3.582,8,8,8h16v304C496,465.234,485.234,476,472,476z"
                    />
                    <path
                      d="M201.546,253.764l44.103-44.103c3.124-3.124,3.124-8.189,0-11.313c-1.562-1.562-3.609-2.343-5.657-2.343H152
    c-4.418,0-8,3.582-8,8s3.582,8,8,8h68.683l-42.343,42.343c-3.124,3.124-3.124,8.189,0,11.313c16.546,16.217,38.42,25.148,61.593,25.148
    c48.523,0,88-39.477,88-88C271.993,297.489,241.688,261.922,201.546,253.764z"
                    />
                    <path
                      d="M351.96,203.213c-0.335-0.409-0.71-0.784-1.119-1.119c-3.125-3.124-8.19-3.124-11.313,0l-39.996,39.996
    c-3.125,3.124-3.125,8.189,0,11.313s8.189,3.124,11.313,0L336,223.317v196.687c0,4.418,3.582,8,8,8s8-3.582,8-8V204.006
    C352,203.741,351.986,203.477,351.96,203.213z"
                    />
                  </svg>

                  <p className="text-left text-xl  ">Content Every Week</p>
                </div>

                <div className="flex items-center gap-4 ">
                  <div className="  items-center flex flex-col">
                    <div className="relative w-[40px] h-[40px] rounded-[50%] border-2 border-white   ">
                      <div className="absolute left-[40%] bottom-1/4 -translate-x-1/6 pr-1 self-center flex flex-col rotate-45 ">
                        <div className="h-[13px] w-[2px] bg-white"></div>
                        <hr className="h-[2px] shadow-md/40 border-0 rounded-full  bg-[white] w-[20px] " />
                      </div>
                    </div>
                  </div>
                  <p className="text-left text-xl  ">Best Audio Quality</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-17">
              <div className="flex flex-col gap-5">
                <h1 className="text-[1.7em] font-medium font-sans text-white">
                  Available on every device
                </h1>
                <div className="flex gap-10 items-center  flex-row">
                  <div className="  
                   justify-center gap-5 items-center flex flex-col ">
                    <div className="">
                      <div className="aspect-17/11 w-[60px] border-2 border-white shadow-md/40 rounded-[2px] "></div>
                      <div className="flex flex-col items-center ">
                        <div className="h-[4px] w-[2px] bg-[white]"></div>
                        <hr className="h-[2px] shadow-md/40 border-0 rounded-full  bg-[white] w-[20px] " />
                      </div>
                    </div>
                    <p className="text-xl  text-white">Smart TV</p>
                  </div>

                  <div className="  flex flex-col gap-4 items-center justify-center  ">
                    <div className=" flex items-end pb-2 aspect-3/5 w-[30px] border-2 border-white shadow-md/40 rounded-[8px] ">
                      <hr className="border-0 h-[2px] w-full bg-white"></hr>
                    </div>
                    <p className="text-xl  text-white">Mobile</p>
                  </div>

                  <div className="  justify-center gap-4 items-center flex flex-col ">
                    <div className="flex items-end justify-center aspect-6/8 h-[53px] border-2 border-white shadow-md/40 rounded-[8px] ">
                      <div className="bg-white rounded-[50%] w-[5px] h-[5px]"></div>
                    </div>
                    <p className="text-xl  text-white">Tablet</p>
                  </div>

                  <div className="  justify-center gap-0.5 items-center flex flex-col ">
                    <svg
                      viewBox="0 0 24 24"
                      className="fill-none h-[70px] w-[70px] pb-2"
                    >
                      <path
                        d="M19.6471 15.5357H4.35294M19.6471 15.5357V8C19.6471 6.11438 19.6471 5.17157 19.0613 4.58579C18.4755 4 17.5327 4 15.6471 4H8.35294C6.46732 4 5.52451 4 4.93873 4.58579C4.35294 5.17157 4.35294 6.11438 4.35294 8V15.5357M19.6471 15.5357L21.3911 17.3358C21.4356 17.3818 21.4579 17.4048 21.4787 17.4276C21.7998 17.7802 21.9843 18.2358 21.999 18.7124C22 18.7433 22 18.7753 22 18.8393C22 18.9885 22 19.0631 21.996 19.1261C21.9325 20.1314 21.1314 20.9325 20.1261 20.996C20.0631 21 19.9885 21 19.8393 21H4.16068C4.01148 21 3.93688 21 3.87388 20.996C2.86865 20.9325 2.06749 20.1314 2.00398 19.1261C2 19.0631 2 18.9885 2 18.8393C2 18.7753 2 18.7433 2.00096 18.7124C2.01569 18.2358 2.20022 17.7802 2.52127 17.4276C2.54208 17.4048 2.56438 17.3818 2.60888 17.3358L4.35294 15.5357"
                        stroke="white"
                        stroke-width="0.9"
                        stroke-linecap="round"
                      />
                      <path
                        d="M9.5 18.5H14.5"
                        stroke="white"
                        stroke-width="1"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.75 6.75C12.75 7.16421 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.16421 11.25 6.75C11.25 6.33579 11.5858 6 12 6C12.4142 6 12.75 6.33579 12.75 6.75Z"
                        fill="white"
                      />
                    </svg>

                    <p className="text-xl  text-white">Computer</p>
                  </div>

                  <div className="  justify-center gap-2 items-center flex flex-col ">
                    <svg
                      fill="#ffffff"
                      width="64px"
                      height="64px"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55,17h-2v-4H43v4H33V4h-2v13H21v-4H11v4H9c-3.309,0-6,2.691-6,6v32c0,3.309,2.691,6,6,6h6c3.309,0,6-2.691,6-6v-4.5
    c0-1.93,1.794-3.5,4-3.5h14c2.206,0,4,1.57,4,3.5V55c0,3.309,2.691,6,6,6h6c3.309,0,6-2.691,6-6V23C61,19.691,58.309,17,55,17z
     M45,15h6v2h-6V15z M13,15h6v2h-6V15z M59,55c0,2.206-1.794,4-4,4h-6c-2.206,0-4-1.794-4-4v-4.5c0-3.032-2.691-5.5-6-5.5H25
    c-3.309,0-6,2.468-6,5.5V55c0,2.206-1.794,4-4,4H9c-2.206,0-4-1.794-4-4V23c0-2.206,1.794-4,4-4h46c2.206,0,4,1.794,4,4V55z"
                      />
                      <path
                        d="M46.167,29c2.022,0,3.667-1.645,3.667-3.666c0-2.022-1.645-3.667-3.667-3.667S42.5,23.312,42.5,25.334
    C42.5,27.355,44.145,29,46.167,29z M46.167,23.667c0.919,0,1.667,0.748,1.667,1.667S47.086,27,46.167,27S44.5,26.253,44.5,25.334
    S45.248,23.667,46.167,23.667z"
                      />
                      <path
                        d="M46.167,35.667c-2.022,0-3.667,1.645-3.667,3.666c0,2.022,1.645,3.667,3.667,3.667s3.667-1.645,3.667-3.667
    C49.834,37.312,48.189,35.667,46.167,35.667z M46.167,41c-0.919,0-1.667-0.748-1.667-1.667s0.748-1.666,1.667-1.666
    s1.667,0.747,1.667,1.666S47.086,41,46.167,41z"
                      />
                      <path
                        d="M44,31.666C44,29.645,42.355,28,40.333,28s-3.667,1.645-3.667,3.666c0,2.022,1.645,3.667,3.667,3.667S44,33.688,44,31.666
    z M40.333,33.333c-0.919,0-1.667-0.748-1.667-1.667S39.414,30,40.333,30S42,30.747,42,31.666S41.252,33.333,40.333,33.333z"
                      />
                      <path
                        d="M52.333,28c-2.022,0-3.667,1.645-3.667,3.666c0,2.022,1.645,3.667,3.667,3.667S56,33.688,56,31.666
    C56,29.645,54.355,28,52.333,28z M52.333,33.333c-0.919,0-1.667-0.748-1.667-1.667S51.414,30,52.333,30S54,30.747,54,31.666
    S53.252,33.333,52.333,33.333z"
                      />
                      <rect height="19" width="2" x="13" y="22.667" />
                      <rect height="2" width="6" x="17" y="31.167" />
                      <rect height="2" width="6" x="6" y="31.167" />
                    </svg>

                    <p className="text-xl  text-white">Console</p>
                  </div>
                </div>
              </div>
              <hr className=" border-0 w-full h-[1px] bg-[grey]"></hr>
              <div className="flex flex-col gap-10 pt-3">
                <h1 className="text-[1.7em] font-medium font-sans text-white">
                  About the plan
                </h1>
                <p className = "text-xl">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum mollit anim.
                </p>
                <p className = "text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div className=" sticky col-start-7 col-end-11  self-start top-[1em] pr-[3em] ">
            <div className="  flex flex-col rounded-3xl py-[3.0em] px-[2.3em] bg-[#3b38386b]">
              <div className="flex flex-col justify-between gap-6">
                <h3 className="text-[1.7em] font-sans leading-[1.2] font-stretch-extra-expanded font-medium">
                  Choose your plan
                </h3>
                <p className="text-left text-xl">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit tortor
                  eu egestas morbi sem vulputate etiam facilisis pellentesque ut
                  quis.
                </p>
                <h2 className="text-[2.8em] font-sans leading-[1] font-medium">
                  $9.99 USD
                </h2>
                <h3 className="text-[1.7em] font-sans leading-[1] font-medium">
                  One-Time payment
                </h3>
                <Link
                  to="/"
                  className="bg-[#19a3ff] w-full py-[1em] text-[1.4em] text-center px-4 rounded-full font-medium text-white"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 bg-[#90909092] h-[0.5px]  mt-[50px]" />
        <Footer />
      </main>
    </>
  );
}
