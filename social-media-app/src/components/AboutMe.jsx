import React from "react";
// import userCard from "../components"

const BioCard = (props) => {
  return (
    <div className=" md:w-full h-full flex pl-5  md:pl-17 py-4 items-center rounded-xl bg-slate-200">
      <div className="flex">
        <div className="py-3">
          <p className="text-black md:ml-7 ml-5 text-xl md:text-xl">Name : Clairo</p>
          <p className="text-black md:ml-7 ml-5 text-xl md:text-xl ">Date of Birth : May 15 1987</p>
          <p className="text-black md:ml-7 ml-5 text-xl md:text-xl">Adrress : Jl.Sesama</p>
          <p className="text-black md:ml-7 ml-5 text-xl md:text-xl ">
            Email Addres: imel@gmail.compact
          </p>
        </div>
      </div>
    </div>
  );
};
export default BioCard;
