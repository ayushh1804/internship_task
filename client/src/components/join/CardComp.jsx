import React from "react";

const CardComp = () => {
  return (
    <div className="p-4 border text-center flex flex-col gap-2 border-gray-500 rounded-lg w-1/2 ">
      <div className="">
        <div>
          <p className="font-extrabold tracking-wider">
            Commencement of business{" "}
          </p>
        </div>
        <div>
          <p>Invested shareholders must confirm payment and office address </p>
        </div>
        <div className="flex justify-around bg-gray-200 rounded-lg p-2 ">
          <ul>
            <li className="text-blue-500">Due date</li>
            <li>within 180</li>
            <li>days</li>
          </ul>
          <ul>
            <li className="text-orange-500">Penalty Fees</li>
            <li>₹50,000 for the company</li>
            <li>₹1,000 /day for directors</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
