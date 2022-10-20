import React, { useEffect, useState } from "react";
import { ContainerHome } from "../components/Container";
import { PostCard, FormPost } from "../components/Card";
import { useTitle } from "../utils/hooks/useTitle";
import axios from "axios";
import { data } from "autoprefixer";

function Home() {
  useTitle("Sosmed App");

  const [user, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API =
    "https://virtserver.swaggerhub.com/aziz-wahyudin/Social-Media-Apps/1.0.0/posts";
  const API_USERS =
    "https://virtserver.swaggerhub.com/aziz-wahyudin/Social-Media-Apps/1.0.0/users";

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

  const getUsers = async () => {
    var requestOptions = {
      method: "get",
      url: API_USERS,
      headers: {
        Authorization: "12jfoajfidaskudsghusdhfijijwiruijagjidf",
      },
    };
    try {
      const response = await axios(requestOptions);
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerHome>
      <div className="h-full flex flex-col gap-6 md:mx-96 mx-40 md:h-full">
        <FormPost key={user.id_user} username={user.username} />
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
