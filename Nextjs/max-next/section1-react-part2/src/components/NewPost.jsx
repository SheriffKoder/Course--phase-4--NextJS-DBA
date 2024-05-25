import classes from './NewPost.module.css';
import { useState } from 'react';


function NewPost({hideModalHandler, onAddPost}) {


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

  function submitHandler (event) {
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    }

    console.log(postData);
    onAddPost(postData); // update the posts state in the parent
    hideModalHandler(); //close the form when done


  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={authorChangeHandler}
        placeholder="Something here"/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required placeholder="Max"
        onChange={bodyChangeHandler}/>
      </p>

      <p className={classes.actions}>
        <button type="button" onClick={hideModalHandler}>Cancel</button>
        <button>Submit</button>                 {/*submit type button by default*/}
      </p>
    </form>
  );
}

export default NewPost;