import React from "react";
import { ContainerHome } from "../components/Container";
import ProfileCard from "../components/ProfileCard";
import { Tab } from "@headlessui/react";
import BioCard from "../components/AboutMe";

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
        <div className="inline-block  w-full mt-11 md:mx-96">
          <div>
            <ProfileCard />
          </div>
          <Tab.Group>
            <Tab.List
              className={
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
            <Tab.Panels className={"mt-1  h-full"}>
              <Tab.Panel>
                <div>
                  <ProfileCard />
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
