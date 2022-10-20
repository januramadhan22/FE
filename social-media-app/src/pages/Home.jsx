import React from "react";
import { ContainerHome } from "../components/Container";
import { PostCard, FormPost } from "../components/Card";
import { useTitle } from "../utils/hooks/useTitle";

function Home() {
  useTitle("Sosmed App");

  return (
    <ContainerHome>
      <div className="md:mx-96 mx-40 md:h-full">
        <FormPost />
        <PostCard />
      </div>
    </ContainerHome>
  );
}

export default Home;
