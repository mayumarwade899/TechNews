import { useGlobalContext } from "./Context";
import React from "react";

const Stories = () => {
  const { hits, nbPages } = useGlobalContext();

  // if (isLoading) {
  //   return (
  //     <>
  //       <h1>Loading...</h1>
  //     </>
  //   );
  // }

  return (
    <>
      <h2>Tech news</h2>
      {hits?.map((curPost) => {
        return <h2>{curPost.title}</h2>;
      })}
    </>
  );
};

export default Stories;
