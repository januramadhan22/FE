import React from "react";
import { ContainerHome } from "../components/Container";
import { PostCard, FormPost } from "../components/Card";

function Home() {
  return (
    <ContainerHome>
      <FormPost />
      <PostCard />
    </ContainerHome>
  );
}

export default Home;
