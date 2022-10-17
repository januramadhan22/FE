import React from "react";
// import userCard from "../components"

const ProfileCard = (props) => {
  return (
    // <div className="flex justify-center w-screen bg-red-700">
    /* <div className="bg-blue-600 w-full md:w-1/2 h-48 "> */
    <div className=" md:w-full h-full flex pl-5  md:pl-17 py-4 items-center rounded-xl bg-slate-200">
      <div className="flex">
        <img
          // style={{ borderRadius: "50%", height: "85%", width: "20%" }}
          className="w-32 h-32 md:w-48 md:h-48  rounded-full"
          src="https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/clairo.jpg"
          alt={props.userName}
        />
        <div className="py-3">
          <p className="text-black md:ml-7 ml-5 text-xl md:text-3xl">Clairo</p>
          <p className="text-black md:ml-7 ml-5 text-xl md:text-xl underline">Edit Profile</p>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
