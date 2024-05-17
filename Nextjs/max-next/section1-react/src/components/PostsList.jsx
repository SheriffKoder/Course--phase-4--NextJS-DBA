import React, { useState } from 'react'
import Post from './Post'
import classes from "./PostsList.module.css"
import NewPost from './NewPost'

const body = "Check out the course";

const PostList = () => {

  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    console.log(event.target.value);
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    console.log(event.target.value);
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost 
        onBodyChange={bodyChangeHandler} 
        enteredBody={enteredBody}
        onAuthorChange={authorChangeHandler}
        enteredAuthor={enteredAuthor}/>

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody}/>
        <Post author={"max"} body={body}/>
      </ul>

    </>
    
  )
}

export default PostList