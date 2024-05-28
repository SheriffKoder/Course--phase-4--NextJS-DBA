
import { useState } from "react";
import { Outlet } from "react-router-dom";

// import Post from "../components/Post";
import PostList from "../components/PostsList";
// import MainHeader from "../components/MainHeader";


// passing functions and states across multiple levels of components
// App > PostList > Modal
// PostList > Post

function Posts() {

   //28
  //  const [ modalIsVisible, setModalIsVisible ] = useState(false);

   // instead of passing the setState, can pass this function and use onClick in the PostList>Modal component
  //  function hideModalHandler () {
  //    setModalIsVisible(false);
  //  }

  //  function showModalHandler () {
  //   setModalIsVisible(true)
  // }


  // display the posts + the add post overlay

  return (
    <>
      <Outlet />
      {/* <MainHeader onCreatePost={showModalHandler} /> */}
      <main>
        {/* <PostList modalIsVisible={modalIsVisible} hideModalHandler={hideModalHandler} /> */}
        <PostList />
      
      </main>
    </>

  );
}

export default Posts;


export async function loader () {

  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();

  return resData.posts;

}