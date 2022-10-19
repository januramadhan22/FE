import React from "react";
import { ContainerHome } from "../components/Container";
import ProfileCard from "../components/ProfileCard";
import { Tab } from "@headlessui/react";
import BioCard from "../components/AboutMe";
import PostsCard from "../components/Card";

export default function UserProfile() {
  return (
    <ContainerHome>
      <div className=" w-full flex justify-center md:mt-16 ">
        {/* <div className="bg-zinc-500 w-full md:mx-96 ">

          <div className="tabs  w-full h-fit  bg-slate-500 flex justify-around  ">
            <a
              className="tab tab-bordered text-white"
              data-toggle="tab"
              href="../components/ProfileCard"
            >
              <p> Posts</p>
            </a>
            <a className="tab tab-bordered tab-active text-white ">
              <p>About Me</p>
            </a>
            <a className="tab tab-bordered">Media</a>
          </div>
        </div> */}
        <div className="inline-block  w-full mt-7 md:mt-11 mx-10 h-full  md:mx-96">
          <div className="h-3/5">
            <ProfileCard />
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

                "bg-gray-600 flex justify-around w-full h-16 text-4xl mt-8 text-white"
              }
            >
              <div className="flex w-full justify-around">
                <Tab className={"focus:border-b-4 border-indigo-500 "}>
                  Posts
                </Tab>
                <Tab className={"focus:border-b-4 border-indigo-500 "}>
                  About Me

                </Tab>
              </div>
            </Tab.List>

            <Tab.Panels className={"mt-5 h-full"}>
              <Tab.Panel>
                <div className="bg-blue-500 w-fit h-3">
                  <PostsCard />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <BioCard />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </ContainerHome>
  );
}
