import { NextPage } from "next";
import React from "react";
import { api } from "../../utils/api";

const Index: NextPage = () => {
  const { data } = api.posts.getAll.useQuery();

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h1>{post.content}</h1>
        </div>
      ))}
    </div>
  );
};

export default Index;
