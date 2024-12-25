import React from "react";
import Counter from "./Counter";
import icon1 from "../constants/images/icons/calendar.png";
import icon2 from "../constants/images/icons/project.png";
import icon3 from "../constants/images/icons/skill.png";
import icon4 from "../constants/images/icons/client.png";

function CounterExp() {
  const iconStyle = "w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 justify-center w-full p-8 rounded shadow-lg">
      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <div
            className={`${iconStyle}`}
            style={{
              maskImage: `url(${icon1})`,
              WebkitMaskImage: `url(${icon1})`,
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            <Counter threshold={1} increment={1} />
          </h1>
          <h2 className="text-xl bg-clip-text text-transparent bg-black">
            Years Of Experience
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <div
            className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500"
            style={{
              maskImage: `url(${icon2})`,
              WebkitMaskImage: `url(${icon2})`,
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            <Counter threshold={5} increment={1} />
          </h1>
          <h2 className="text-xl bg-clip-text text-transparent bg-black">
            Project Completed
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <div
            className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-red-500"
            style={{
              maskImage: `url(${icon3})`,
              WebkitMaskImage: `url(${icon3})`,
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            <Counter threshold={10} increment={1} />
          </h1>
          <h2 className="text-xl bg-clip-text text-transparent bg-black">
            Skilled Experts
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <div
            className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500"
            style={{
              maskImage: `url(${icon4})`,
              WebkitMaskImage: `url(${icon4})`,
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
            <Counter threshold={20} increment={1} />
          </h1>
          <h2 className="text-xl bg-clip-text text-transparent bg-black">
            Satisfied Clients
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CounterExp;
