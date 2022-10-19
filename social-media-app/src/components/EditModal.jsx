import React from "react";
// import userCard from "../components"

const EditCard = (props) => {
  return (
    // <div className=" md:w-full h-full flex border border-black  justify-center rounded-t-xl shadow-md  bg-white">
    <div className="  md:w-full bg-white h-full md:mt-0 rounded-lg">
      <p className="text-black font-bold text-xl md:text-3xl md:ml-5 md:mt-4">Edit Profile</p>

      <div className="flex items-center justify-center md:gap-7 md:text-lg mt-10">
        {/* <p className="text-black   font-semibold" style={{ color: "#219EBC" }}>
          Ubah Foto
        </p> */}

        <label
          className="text-black cursor-pointer font-semibold "
          style={{ color: "#219EBC" }}
          for="pic"
        >
          Ubah Foto
        </label>
        <input
          // class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="pic"
          type="file"
          className="w-0 cursor-pointer"
          style={{ backgroundColor: " #E7ECEF" }}
        />
        <img
          className="w-32 h-32  md:w-32 md:h-32  rounded-full"
          src="https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/clairo.jpg"
          alt={props.userName}
        />

        <div>
          <p className="text-black md:ml-4 font-semibold " style={{ color: "#219EBC" }}>
            Hapus Foto
          </p>
        </div>
      </div>

      <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            style={{ backgroundColor: " #E7ECEF" }}
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Bio">
            Bio
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: " #E7ECEF" }}
            id="bio"
            type="text"
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            class=" hover:bg-blue-700 text-white font-bold md:py-2 md:px-4 mt-5 rounded focus:outline-none focus:shadow-outline md:w-3/5 items-center text-xl"
            type="button"
            style={{ backgroundColor: "#023047" }}
          >
            Selesai
          </button>
        </div>
      </form>
    </div>
    // </div>
  );
};
export default EditCard;
