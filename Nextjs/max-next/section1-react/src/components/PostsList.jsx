import React, { useState } from 'react'
import Post from './Post'
import classes from "./PostsList.module.css"
import NewPost from './NewPost'
import Modal from './Modal'


const body = "Check out the course";

const PostList = ({modalIsVisible, setModalIsVisible, }) => {



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

  // //28 - copied to App.jsx
  // const [ modalIsVisible, setModalIsVisible ] = useState(true);

  // // instead of passing the setState, can pass this function and use onClick
  // function hideModalHandler () {
  //   setModalIsVisible(false)
  // }

  // can also use this
  // let modalContent; //undefined
  // if (modalIsVisible) {
  //   modalContent = <Modal></Modal>
  // }


  return (
    <>
      {/* 27 */}
      {modalIsVisible && (
        // <Modal hideModalHandler={hideModalHandler}>
        <Modal hideModalHandler={hideModalHandler}>
          <NewPost 
            onBodyChange={bodyChangeHandler} 
            enteredBody={enteredBody}
            onAuthorChange={authorChangeHandler}
            enteredAuthor={enteredAuthor}
            hideModalHandler={hideModalHandler}
          />
      </Modal>
      )}

      {/* 28 */}
      {/* {modalContent} */}
      
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody}/>
        <Post author={"max"} body={body}/>
      </ul>

    </>
    
  )
}

export default PostList