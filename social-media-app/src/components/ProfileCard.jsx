import React from "react";
import EditCard from "../components/EditModal";
import axios from "axios";
// import getData from "../pages/UserProfile/getData"

const ProfileCard = ({ nama }) => {
  // const editData = (e) => {
  //   e.preventDefault();
  //   const data = { bio: bio,username:username};
  //   axios
  //   .put("https://virtserver.swaggerhub.com/aziz-wahyudin/Social-Media-Apps/1.0.0/users",data,{
  //     headers:{
  //       Authorization: "12jfoajfidaskudsghusdhfijijwiruijagjidf",
  //       "Content-Type" : "application/json",
  //     },
  //   })
  //   .then(() => getData())
  //   .catch((error) => console.log(error));

  // }

  return (
    <div className=" md:w-full h-full flex pl-5  md:pl-17 py-4 items-center justify-center rounded-t-xl bg-white">
      <div className="flex ">
        <img
          className="w-32 h-32 sm:w-40 sm:h-40  md:w-56 md:h-56  rounded-full"
          src="https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/clairo.jpg"
          alt={nama}
        />
        <div className="items-center flex">
          <div>
            <p className="text-black md:ml-7 ml-5 text-xl md:text-5xl font-bold">{nama}</p>
            <p
              className="text-black md:ml-7 ml-5 text-sm md:text-xl font-semibold mt-4 md:mt-7"
              style={{ color: "#219EBC" }}
            >
              <label htmlFor="my-modal-A" className="cursor-pointer">
                Edit Profile
              </label>
            </p>
            <input type="checkbox" id="my-modal-A" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative bg-white p-0 shadow-lg">
                <label
                  htmlFor="my-modal-A"
                  className="btn border border-white hover:bg-white  hover:border-white  bg-transparent absolute right-2 top-2"
                  style={{ color: "black" }}
                >
                  ✕
                </label>
                <div className="border">
                  <EditCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
