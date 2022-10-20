// import React from "react";
// import getData from "../pages/UserProfile/getPosts";
import React, { useEffect, useState } from "react";
import axios from "axios";

const EditCard = (props) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  // console.log(post);

  const API = "https://virtserver.swaggerhub.com/aziz-wahyudin/Social-Media-Apps/1.0.0/users";

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    var requestOpstions = {
      method: "get",
      url: API,
      headers: {
        Authorization: "12jfoajfidaskudsghusdhfijijwiruijagjidf",
      },
    };
    // console.log(getPosts);

    try {
      const response = await axios(requestOpstions);
      const { username, bio } = response.data.data;
      setUserName(username);
      setBio(bio);
    } catch (error) {
      console.log(error);
    }
  };

  // edit
  const editData = (e) => {
    e.preventDefault();
    const data = { username: username, bio: bio };
    axios
      .put(API, data, {
        headers: {
          Authorization: "12jfoajfidaskudsghusdhfijijwiruijagjidf",
          "Content-Type": "application/json",
        },
      })
      .then(() => getPosts())
      .catch((error) => console.log(error));
  };

  return (
    <div className="  md:w-full bg-white h-full md:mt-0 rounded-lg">
      <p className="text-black font-bold text-xl md:text-3xl md:ml-5 md:mt-4">Edit Profile</p>

      <div className="flex items-center justify-center md:gap-7 md:text-lg mt-10">
        <label
          className="text-black cursor-pointer font-semibold "
          style={{ color: "#219EBC" }}
          for="pic"
        >
          Ubah Foto
        </label>
        <input
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

      <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => editData(e)}>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            style={{ backgroundColor: " #E7ECEF" }}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
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
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            class=" hover:bg-blue-700 text-white font-bold md:py-2 md:px-4 mt-5 rounded focus:outline-none focus:shadow-outline md:w-3/5 items-center text-xl"
            type="submit"
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
