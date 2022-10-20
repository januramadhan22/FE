import React from "react";
import { ContainerLogin } from "../components/Container";
import { PostCard, FormPost } from "../components/Card";
import { WithRouter } from "../utils/Navigation";
import { useTitle } from "../utils/hooks/useTitle";

function SosmedApp() {
  useTitle("Sosmed App");
  return (
    <ContainerLogin>
      <div className="md:mx-96 mx-40 cursor-not-allowed">
        <FormPost />
        <div className="cursor-not-allowed">
          <PostCard />
        </div>
      </div>
    </ContainerLogin>
  );
}

export default WithRouter(SosmedApp);
