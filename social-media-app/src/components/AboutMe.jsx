import React from "react";
// import userCard from "../components"

const BioCard = ({ bio }) => {
  return (
    <div className=" md:w-full h-full flex pl-5  md:pl-17 py-4 items-center rounded-xl  bg-white">
      <div className="flex">
        <div className="py-3 text-black md:ml-7 ml-5 text-xl md:text-xl">{bio}</div>
      </div>
    </div>
  );
};
export default BioCard;
