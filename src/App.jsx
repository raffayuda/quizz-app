import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [term, setTerm] = useState("jakarta");
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=d69a59dc802512c65c58242842dd5958&units=metric`
    )
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, [term]);
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className={`${data && data.weather[0].icon.slice(-1) === 'n' ? "bg-night" : "bg-day"} h-[600px] w-[500px] rounded-lg p-8`}>
          <div className="flex justify-between items-center gap-3">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="py-2 px-4 rounded-full text-[14px] text-slate-400 w-full outline-none focus:shadow-lg focus:shadow-slate-500 bg-white"
              placeholder="Search"
            />
            <div
              onClick={() => {
                setTerm(input);
                setInput("");
              }}
              className="bg-white rounded-full p-2 hover:scale-110 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <img width={150} height={150} src={`./src/assets/${data && data.weather[0].icon}.png`} alt="" />
          </div>
          <div className="flex justify-center mt-1 text-[70px] text-white">
            {data && data.main.temp} &deg;C
          </div>
          <div className="mt-[-10px] text-white flex flex-col justify-center items-center">
            <div className="text-[40px] font-bold">{data && data.name}</div>
            <div className="text-[24px]">Precipitation</div>
            <div className="flex gap-6">
              <span>Min: {data && data.main.temp_min} &deg;C</span> <span>Max: {data && data.main.temp_max} &deg;C</span>
            </div>
          </div>
          <div className="mt-10 p-4 relative rounded-full flex justify-between">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#001026] opacity-30 w-full rounded-full">
              <div className="flex justify-center">
                <div className="flex z-10 text-white gap-10 text-[20px]">
                  <img src={"./src/assets/rain.png"} alt="" />
                  <span className="text-white">{data && data.clouds.all} %</span>
                </div>
                <div className="flex z-10 text-white gap-10 text-[20px]">
                  <img src={"./src/assets/humidity.png"} alt="" />
                  <span>{data && data.main.humidity} %</span>
                </div>
                <div className="flex z-10 text-white gap-10 text-[20px]">
                  <img src={"./src/assets/wind.png"} alt="" />
                  <span>{data && data.wind.speed} km/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
