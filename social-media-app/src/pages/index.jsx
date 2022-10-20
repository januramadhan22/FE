import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { ContainerLogin } from "../components/Container";
import { PostCard, FormPost } from "../components/Card";

import { WithRouter } from "../utils/Navigation";
import { useTitle } from "../utils/hooks/useTitle";

function SosmedApp() {
  useTitle("Sosmed App");
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const API = "https://virtserver.swaggerhub.com/aziz-wahyudin/Social-Media-Apps/1.0.0/posts";

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get(API);
      setPosts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerLogin>
      <div className=" md:mx-96 mx-40 cursor-not-allowed">
        <div className="h-full flex flex-col gap-6 cursor-not-allowed">
          {posts.map((post, i) => {
            return (
              <div key={i}>
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
      </div>
    </ContainerLogin>
  );
}

export default WithRouter(SosmedApp);
