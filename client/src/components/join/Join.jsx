import React from "react";

const Join = () => {

    const carditems = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
      ];

  return (
    <div className="p-5 my-10">
      <div className="flex flex-col gap-5 text-center ">
        <p className="font-extrabold text-4xl">
          Want to{" "}
          <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Join
          </span>{" "}
          Us?
        </p>
        <p>
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>
      <div>
        {/* card */}
        <div className="flex flex-wrap justify-center gap-20 mt-20  my-10">
        {carditems.map(({ id}) => (
          <CardTrack key={id}  />
        ))}
      </div>
      
      </div>
      <div>
        <p className="text-center ">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
          every day until you file the form . There is no maximum penalty
          amount. So, if you don't file the form for a year, you will owe
          ₹73,000 per form
        </p>
      </div>
    </div>
  );
};



const CardTrack = ({  }) => {
    return (
      <div className=" w-96  min-h-52 max-h-auto  rounded-xl  backdrop-blur-sm bg-opacity-10 flex flex-col justify-around shadow-[0_0_10px_0px_rgba(242, 245, 245, 0.75)]">
       <div>

       <div className=" border text-center flex flex-col gap-2 p-8 border-gray-500 rounded-lg ">
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

       </div>
      </div>
    );
  };



export default Join;
