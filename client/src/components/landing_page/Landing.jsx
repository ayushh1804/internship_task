import React from "react";
import left from "./assets/left.png";
const Landing = () => {
  return (
    <div className="flex my-10 p-10 items-center">
      <div className="flex flex-col">
        <div>
          <p className="text-6xl font-bold">
            Find{" "}
            <span className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Partners
            </span>{" "}
            (CAs)
            <br /> available online
          </p>
          <p className="text-gray-500 w-2/3 my-12">
            <span className="text-gray-900">CONNECT</span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA’s for compliance support
          </p>
        </div>
        <div>
          <form action="" className="">
            <input
              type="text"
              placeholder="search by name"
              className="border border-gray-400 p-2 rounded"
            />
            <button className="border border-gray-400 px-5 py-2  bg-blue-600 text-white rounded-md ">
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <img src={left} alt="" />
      </div>
    </div>
  );
};

export default Landing;
