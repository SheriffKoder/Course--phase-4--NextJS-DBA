
import { useState } from "react";

import Post from "./components/Post";
import PostList from "./components/PostsList";
import MainHeader from "./components/MainHeader";


// passing functions and states across multiple levels of components
// App > PostList > Modal
// PostList > Post

function App() {

   //28
   const [ modalIsVisible, setModalIsVisible ] = useState(false);

   // instead of passing the setState, can pass this function and use onClick in the PostList>Modal component
   function hideModalHandler () {
     setModalIsVisible(false)
   }

   function showModalHandler () {
    setModalIsVisible(true)
  }



  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList modalIsVisible={modalIsVisible} hideModalHandler={hideModalHandler} />
      </main>
    </>

  );
}

export default App;