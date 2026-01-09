// import { useLoaderData } from "react-router-dom";

import { useState } from "react";

// NOTE: This Function Component is a Child Component to Main.jsx 
export default function Questions({ Questions }) {
  const [activeIndexes, setActiveIndexes] = useState([]);

  function handleViewQuestion(index) {
    setActiveIndexes((prev) => {
      return prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];
    });
  }

  console.log("QuestionPage Questions", Questions);

  return (
    <section className=" flex flex-col justify-center items-center gap-11 w-full h-auto py-[120px]  bg-black">
      <div className="flex flex-col items-center w-[50%] gap-4 ">
        <h2 className="font-bold text-3xl font-sans text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id
          volutpat imperdiet quis at pellentesque nunc commodo nunc purus
          pulvina.
        </p>
      </div>

      <ul className=" flex flex-col gap-6 w-[80%] ">
        {Questions.map((quest, index) => (
          <li key={quest.question}>
            <div className="flex flex-col  py-[43px] px-[35px] gap-1 rounded-2xl border-1 border-[#6d6c6c] hover:scale-95">
              <div className="flex justify-between items-center ">
                <h3 className="font-bold text-2xl font-sans">
                  {quest.question}
                </h3>
                <div
                  className=" flex items-center shrink-0 justify-center h-13 w-13 rounded-full bg-[#80808069]"
                  onClick={() => handleViewQuestion(index)}
                >
                  <svg
                    viewBox="0 0 256 256"
                    className="w-5 h-5 stroke-[white] stroke-[20]"
                  >
                    <path d="M220,128a4.0002,4.0002,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4.0002,4.0002,0,0,1,220,128Z"></path>
                  </svg>
                </div>
              </div>
              {activeIndexes.includes(index) && (
                <p>
                  {quest.answer} {activeIndexes}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
