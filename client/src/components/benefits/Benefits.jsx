import React from "react";
import student from "./assets/student.png";
import teacher from "./assets/teacher.png";
import glass from "./assets/glass.png";
import connect from "./assets/connect.png";
import research from "./assets/research.png";
import academy from "./assets/academy.png";
const Benefits = () => {
  return (
    <div className="h-screen my-10 flex p-10">
      <div className="flex flex-col gap-20">
        <div className="text-7xl tracking-wider font-extrabold">
          <span className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            All-in-One
          </span>{" "}
          platform that Makes Easier
        </div>
        <div className="text-xl font-semibold w-2/3">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </div>
        <div className="flex gap-10 tracking-wider">
          <ul>
            <li className="flex items-center">
              <span>
                <img src={glass} alt="" />
              </span>
              <span>SEARCH for vital company information </span>
            </li>
            <li className="flex items-center mt-5">
              <span>
                <img src={research} alt="" />
              </span>
              <span>RESEARCH and generate reports that drive growth </span>
            </li>
          </ul>
          <ul>
            <li className="flex items-center">
              <span>
                <img src={connect} alt="" />
              </span>
              <span>
                CONNECT with the resources to meet your business needs{" "}
              </span>
            </li>
            <li className="flex items-center mt-5">
              <span>
                <img src={academy} alt="" />
              </span>
              <span>
                ACADEMY to give you the skills for success in your career{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <img src={student} alt="" className="relative " />
          <img src={teacher} alt="" className="relative right-60" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
