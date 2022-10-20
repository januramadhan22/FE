import { ContainerHome } from "../components/Container";
import ProfileCard from "../components/ProfileCard";
import { Tab } from "@headlessui/react";
import BioCard from "../components/AboutMe";
import { PostCard } from "../components/Card";
import { useTitle } from "../utils/hooks/useTitle";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile() {
  useTitle("Username Profile");
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
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
      setPosts(response.data.data.post);
      setPost(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerHome>
      <div className=" w-full flex justify-center md:mt-16 mb-9 ">
        <div className="inline-block  w-full mt-7 md:mt-11 mx-10 h-full  md:mx-96">
          <div className="h-3/5 ">
            <ProfileCard nama={post.username} />
          </div>
          <Tab.Group>
            <Tab.List
              className={
                "bg-white flex  w-full h-16 text-2xl font-semibold rounded-b-xl text-white"
              }
            >
              <div className="flex w-full justify-center rounded-b-xl" style={{ color: "#219EBC" }}>
                <Tab className={"focus:border-b-4 border-focus-border-b  md:mr-16 mr-4  "}>
                  <div className="mt-5">Postingan</div>
                </Tab>
                <Tab className={"focus:border-b-4 border-focus-border-b  "}>
                  <div className="mt-5">Bio</div>
                </Tab>
              </div>
            </Tab.List>

            <Tab.Panels className={"mt-5 h-full"}>
              <Tab.Panel>
                <div className="h-96 mb-3">
                  {posts.map((post, i) => {
                    return (
                      <div className=" mb-3 w-full" key={i}>
                        <PostCard
                          owner={post.owner}
                          content={post.content}
                          comment={post.comment}
                          userComment={post.username}
                          contentComment={post.content}
                        />
                      </div>
                    );
                  })}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="h-96">
                  <BioCard bio={post.bio} />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </ContainerHome>
  );
}
