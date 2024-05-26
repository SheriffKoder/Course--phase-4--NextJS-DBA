import React, { useEffect, useState } from 'react'
import Post from './Post'
import classes from "./PostsList.module.css"
import NewPost from '../routes/NewPost'
import Modal from './Modal'


const body = "Check out the course";

const PostList = ({modalIsVisible, setModalIsVisible, hideModalHandler}) => {


  const [posts, setPosts] = useState([]);

  // loading
  // can use an alternative UI while isFetching is true
  const [isFetching, setIsFetching] = useState(false);

  // will pass to children to allow them change the posts state
  function addPostHandler (postData) {

    // send postData to the backend for storage
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json"
      }
    });


    setPosts((existingPosts)=> [postData, ...existingPosts]);
  }

  // React components should always return jsx so async is not supported on them by default
  // so a fetch GET, cant await but can use .then on it
  // however this would cause an infinite loop is fetched from outside a useEffect
  // so we use a useEffect and in it an async function
  // and inside the function we await the fetch and res.json();
  // then call the function in the useEffect
  
  // async for the function instead of the useEffect itself becomes async
  // as we are not returning a promise from the function
  useEffect(()=> {

      async function fetchPosts () {
        setIsFetching(true);
        // retrieve postData from the backend
        const response = await fetch("http://localhost:8080/posts");
        const resData = await response.json();
        if (!response.ok) {
          // if there is an error with the response
          // do this
        }
        setPosts(resData.posts);
        setIsFetching(false);
      };

      fetchPosts();

  }, []);



  return (
    <>
      {/* 27 */}
      {/* {modalIsVisible && (
        // <Modal hideModalHandler={hideModalHandler}>
        <Modal hideModalHandler={hideModalHandler}>
          <NewPost 
            hideModalHandler={hideModalHandler}
            onAddPost={addPostHandler}
          />
      </Modal>
      )} */}

      {/* if there are posts */}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
        {posts.map((post)=> (
          <Post key={post.body} author={post.author} body={post.body}/>
        ))}
        </ul>
      )}

      {!isFetching && posts.length === 0 && (
        <div style={{textAlign: "center", color:"white"}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {isFetching &&
        <div style={{textAlign: "center", color:"white"}}>
          <p>Loading posts...</p>
        </div>
      }


    </>
    
  )
}

export default PostList