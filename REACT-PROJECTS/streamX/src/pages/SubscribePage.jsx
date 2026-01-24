import SubscribeButton from "../reusable_components/SubscribeButton";
import QuestionsPage from "../components/Questions";
import Footer from "../components/Footer";
import { Link, useLoaderData } from "react-router-dom";
import NavBar from "../reusable_components/NavBar";

export default function SubscribePage() {
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
        <section className="w-full bg-black mb-[50px] py-[100px] pr-[4em] grid grid-cols-2 grid-rows-1 ">
          <div className="  px-[4em] col-start-1 flex flex-col items-center gap-10">
            <div className="flex flex-col gap-3   ">
              <h5 className="text-xl tracking-wide uppercase  font-stretch-condensed font-medium font-sans ">
                Unlimited animals documentaries
              </h5>
              <h2 className="text-[50px] tracking-wide font-sans leading-[1.2] font-stretch-extra-expanded font-bold">
                Get Streaming X subscription today
              </h2>
            </div>
            <div className="flex flex-col items-center gap- ">
              <div className="flex  justify-between  py-[30px] gap-7 ">
                <svg
                  fill="currentColor"
                  viewBox="0 0 472.658 472.658"
                  className="text-white w-[100px] self-baseline"
                >
                  <path d="M472.572,327.116h-0.005c-0.697,0-55.428-0.981-58.861-96.663c-3.622-100.851-72.728-138.885-120.515-140.647 c-30.639-23.009-68.59-36.81-109.857-36.81C82.08,52.996,0,135.077,0,236.33C0,337.582,82.08,419.662,183.333,419.662 c101.252,0,183.332-82.08,183.332-183.331c0-46.164-17.191-88.224-45.353-120.457c31.737,12.036,70.133,43.435,72.711,115.291 c4.111,114.481,77.659,115.644,78.634,115.644L472.572,327.116z M112.458,317.943c-16.857,9.731-38.41,3.956-48.142-12.899 s-3.956-38.411,12.899-48.142c16.856-9.733,38.41-3.956,48.142,12.899C135.089,286.657,129.313,308.212,112.458,317.943z M125.357,202.856c-9.732,16.856-31.286,22.63-48.142,12.899c-16.856-9.731-22.631-31.284-12.899-48.14 c9.732-16.858,31.285-22.632,48.142-12.901C129.313,164.447,135.089,186.001,125.357,202.856z M183.333,373.758 c-19.464,0-35.242-15.779-35.242-35.243c0-19.461,15.778-35.24,35.242-35.24c19.463,0,35.241,15.779,35.241,35.24 C218.575,357.98,202.796,373.758,183.333,373.758z M163.436,236.33c0-10.988,8.908-19.897,19.897-19.897 c10.988,0,19.896,8.909,19.896,19.897c0,10.987-8.908,19.896-19.896,19.896C172.344,256.226,163.436,247.318,163.436,236.33z M183.333,169.385c-19.464,0-35.242-15.779-35.242-35.242c0-19.465,15.778-35.243,35.242-35.243 c19.463,0,35.241,15.778,35.241,35.243C218.575,153.607,202.796,169.385,183.333,169.385z M302.35,305.044 c-9.732,16.856-31.285,22.63-48.142,12.899c-16.856-9.731-22.631-31.286-12.899-48.142c9.732-16.856,31.286-22.632,48.142-12.899 C306.307,266.633,312.082,288.188,302.35,305.044z M289.45,215.756c-16.856,9.731-38.41,3.956-48.142-12.899 c-9.732-16.856-3.956-38.409,12.899-48.142c16.857-9.731,38.41-3.956,48.142,12.901 C312.082,184.472,306.307,206.025,289.45,215.756z"></path>
                </svg>
                <div className="flex flex-col self-end  gap-2">
                  <h3 className="text-2xl font-sans font-bold ">
                    More than 1,500+ documentaries
                  </h3>
                  <p className="leading-[30px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    tortor eu egestas morbi sem vulputate etiam facilis.
                  </p>
                </div>
              </div>

              <div className="flex justify-between py-[30px] gap-7 ">
                <svg
                  width="100px"
                  height="100px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  className="self-baseline"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M19 3V7M17 5H21M19 17V21M17 19H21M10 5L8.53001 8.72721C8.3421 9.20367 8.24814 9.4419 8.10427 9.64278C7.97675 9.82084 7.82084 9.97675 7.64278 10.1043C7.4419 10.2481 7.20367 10.3421 6.72721 10.53L3 12L6.72721 13.47C7.20367 13.6579 7.4419 13.7519 7.64278 13.8957C7.82084 14.0233 7.97675 14.1792 8.10427 14.3572C8.24814 14.5581 8.3421 14.7963 8.53001 15.2728L10 19L11.47 15.2728C11.6579 14.7963 11.7519 14.5581 11.8957 14.3572C12.0233 14.1792 12.1792 14.0233 12.3572 13.8957C12.5581 13.7519 12.7963 13.6579 13.2728 13.47L17 12L13.2728 10.53C12.7963 10.3421 12.5581 10.2481 12.3572 10.1043C12.1792 9.97675 12.0233 9.82084 11.8957 9.64278C11.7519 9.4419 11.6579 9.20367 11.47 8.72721L10 5Z"
                      stroke="#ffffff"
                      strokeWidth="0.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <div className="flex self-end flex-col   gap-2 ">
                  <h3 className="text-2xl font-sans font-bold ">
                    Recorded in 4K
                  </h3>
                  <p className="leading-[30px]">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur excepteur
                  </p>
                </div>
              </div>

              <div className="flex justify-between  gap-8 py-[30px]  ">
                <div className="  justify-center  items-center flex flex-col ">
                  <div className="aspect-17/11 w-[60px] border-2 border-white shadow-md/40 rounded-[2px] "></div>
                  <div className="self-center flex flex-col items-center ">
                    <div className="h-[4px] w-[2px] bg-[white]"></div>
                    <hr className="h-[2px] shadow-md/40 border-0 rounded-full  bg-[white] w-[20px] " />
                  </div>
                </div>

                <div className="flex flex-col self-start leading-[30px] text-left gap-1.5">
                  <h3 className="text-2xl font-sans  font-bold ">
                    Available in all your devices
                  </h3>
                  <p>
                    Massa tincidunt dui ut ornare lectus sit. Imperdiet massa
                    tincidunt nunc pulvinar sapien et ligula ullamcorper.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link to="premium">
            <div className="flex flex-col justify-between px-[3em] py-[4em] h-[94%] items-center gap-4 rounded-3xl bg-[#3b38386b]">
              <div className="flex flex-col justify-between items-center gap-2">
                <h2 className="text-[60px] font-sans leading-[1.2]  font-stretch-extra-expanded font-bold">
                  $9.99
                </h2>
                <h3 className="text-2xl font-sans font-bold ">
                  One-Time payment
                </h3>
                <p className="text-center ">
                  Massa tincidunt dui ut ornare lectus sit. Imperdiet massa
                  tincidunt nunc pulvinar sapien et ligula ullamcorper.
                </p>
              </div>

              <div className="grid grid-cols-2 grid-rows-3 gap-3  ">
                <div className="flex  items-center gap-4 ">
                  <div className="  items-center flex flex-col">
                    <div className="relative w-[40px] h-[40px] rounded-[50%] border-2 border-white   ">
                      <div className="absolute left-[40%] bottom-1/4 -translatex-1/6 self-center flex flex-col rotate-45 ">
                        <div className="h-[13px] w-[2px] bg-white"></div>
                        <hr className="h-[2px] shadow-md/40 border-0 rounded-full  bg-[white] w-[20px] " />
                      </div>
                    </div>
                  </div>
                  <p>Unlimited Access</p>
                </div>

                <div className="flex items-center gap-4 py-[1em]">
                  <div className="flex flex-col items-center">
                    <div className=" relative z-10 w-[40px] border-2 h-[35px] border-[white]   rounded-[2px] ">
                      <div className="absolute z-20 -right-1/5 -top-1/3 border-2 h-[25px] aspect-3/4 rounded-md bg-[#272626] border-[white] shadow-md/40 "></div>
                    </div>
                    <div className="rounded-full relative z-20 bottom-[7px] h-[7px] w-[50px] border-2 bg-[#272626] "></div>
                  </div>

                  <p>Available in All Platform</p>
                </div>

                <div className="flex items-center gap-4 ">
                  <svg
                    fill="#ffffff"
                    viewBox="0 0 512.001 512.001"
                    className="w-[40px] h-[40px]"
                  >
                    <path d="M511.324,194.019c-1.763-5.195-6.643-8.696-12.128-8.696H322.848L268.227,8.55c-3.305-10.749-21.157-10.749-24.453,0 l-54.62,176.773H12.806c-5.494,0-10.365,3.492-12.128,8.696s-0.008,10.953,4.352,14.275l143.216,109.369L93.481,494.939 c-1.652,5.323,0.332,11.098,4.897,14.275c4.574,3.151,10.663,3.049,15.101-0.324l142.526-108.9l142.518,108.9 c2.3,1.746,5.042,2.623,7.776,2.623c2.564,0,5.127-0.775,7.333-2.3c4.557-3.177,6.55-8.952,4.897-14.275l-54.765-177.276 l143.207-109.369C511.332,204.972,513.087,199.223,511.324,194.019z M341.125,302.732c-4.259,3.254-6.03,8.824-4.446,13.951 l45.575,147.551l-118.474-90.52c-2.3-1.746-5.042-2.623-7.776-2.623c-2.742,0-5.477,0.877-7.785,2.632l-118.474,90.52 l45.575-147.551c1.593-5.127-0.187-10.698-4.446-13.951l-120.22-91.823h147.943c5.613,0,10.57-3.654,12.222-9.028l45.183-146.222 l45.192,146.214c1.644,5.374,6.609,9.028,12.222,9.028h147.926L341.125,302.732z"></path>
                  </svg>
                  <p>Exclusive Content</p>
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
                  <p>Downloadable Content</p>
                </div>

                <div className="flex items-center gap-4 ">
                  <svg
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                    className="w-[40px] h-[40px]"
                  >
                    <path d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12.01343,12.01343,0,0,0,36,48V208a12.01343,12.01343,0,0,0,12,12H208a12.01343,12.01343,0,0,0,12-12V48A12.01343,12.01343,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4.00427,4.00427,0,0,1,4,4V84H44V48A4.00427,4.00427,0,0,1,48,44ZM208,212H48a4.00427,4.00427,0,0,1-4-4V92H212V208A4.00427,4.00427,0,0,1,208,212Zm-84-48.00293a19.99994,19.99994,0,0,1-34.13379,14.15039A4.00009,4.00009,0,0,1,95.52,172.4873,11.9999,11.9999,0,1,0,104,151.99707a4.00011,4.00011,0,0,1-3.12354-6.499l10.80127-13.501H92a4,4,0,1,1,0-8h28a4.00011,4.00011,0,0,1,3.12354,6.499l-11.88526,14.85645A20.03329,20.03329,0,0,1,124,163.99707Zm40-36v52a4,4,0,0,1-8,0v-44l-9.6001,7.2002a4.0001,4.0001,0,1,1-4.7998-6.40039l16-12A3.99971,3.99971,0,0,1,164,127.99707Z"></path>
                  </svg>
                  <p>Content Every Week</p>
                </div>

                <div className="flex items-center gap-4 ">
                  <div className="  items-center flex flex-col">
                    <div className="relative w-[40px] h-[40px] rounded-[50%] border-2 border-white   ">
                      <div className="absolute left-[40%] bottom-1/4 -translatex-1/6 pr-1 self-center flex flex-col rotate-45 ">
                        <div className="h-[13px] w-[2px] bg-white"></div>
                        <hr className="h-[2px] shadow-md/40 border-0 rounded-full  bg-[white] w-[20px] " />
                      </div>
                    </div>
                  </div>
                  <p>Best Audio Quality</p>
                </div>
              </div>

              <Link
                to="/subscribe/premium"
                className="bg-[#19a3ff] w-full py-[1em] text-center px-4 rounded-full font-medium text-white"
              >
                Subscribe
              </Link>
            </div>
          </Link>
        </section>
        <hr className="border-0 bg-[#90909092] h-[0.3px] mx-[50px]" />
        <QuestionsPage QuestionsData={questionsData} />
        <hr className="border-0 bg-[#90909092] h-[0.5px]" />
        <Footer />
      </main>
    </>
  );
}
