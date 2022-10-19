import React from "react";
// import userCard from "../components"

const BioCard = (props) => {
  return (
    <div className=" md:w-full h-full flex pl-5  md:pl-17 py-4 items-center rounded-xl  bg-white">
      <div className="flex">
        <div className="py-3 text-black md:ml-7 ml-5 text-xl md:text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
          </p>
          {/* <p className="text-black md:ml-7 ml-5 text-xl md:text-xl ">Date of Birth : May 15 1987</p>
          <p className="text-black md:ml-7 ml-5 text-xl md:text-xl">Adrress : Jl.Sesama</p>
          <p className="text-black md:ml-7 ml-5 text-xl md:text-xl ">
            Email Addres: imel@gmail.compact
          </p> */}
        </div>
      </div>
    </div>
  );
};
export default BioCard;
