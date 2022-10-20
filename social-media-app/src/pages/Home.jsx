import React, { useEffect, useState } from "react";
import { ContainerHome } from "../components/Container";
import { PostCard, FormPost } from "../components/Card";
import { useTitle } from "../utils/hooks/useTitle";
import axios from "axios";

function Home() {
  useTitle("Sosmed App");

  const [datas, setDatas] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API =
    "https://virtserver.swaggerhub.com/aziz-wahyudin/Social-Media-Apps/1.0.0/posts";

  useEffect(() => {
    getUsers();
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

  function getUsers() {
    axios
      .get(
        "https://virtserver.swaggerhub.com/aziz-wahyudin/Social-Media-Apps/1.0.0/users"
      )
      .then((res) => {
        const { results } = res.data;
        const temp = [...datas];
        temp.push(...results);
        setDatas(temp);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <ContainerHome>
      <div className="flex flex-col gap-6 md:mx-96 mx-40 md:h-full">
        <FormPost owner={datas.username} />
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

    </ContainerHome>
  );
}

export default Home;
