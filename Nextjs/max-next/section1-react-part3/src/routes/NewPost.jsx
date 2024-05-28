import Modal from '../components/Modal';
import classes from './NewPost.module.css';
import { useState } from 'react';

import { Link, Form, redirect } from 'react-router-dom';

// submitting via action hook
// create a function in the component that will post to the API
// add name attr to the form inputs, the form will have no submit function
// we can import the Form element and use it instead of form
// that will handle the form submission, prevents default, returns all input values in an object



function NewPost({onAddPost}) {


  return (
    <Modal>
      <Form className={classes.form} method='post'
      // onSubmit={submitHandler}
      >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body"
          // onChange={authorChangeHandler}
          placeholder="Something here"/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required placeholder="Max"
          // onChange={bodyChangeHandler}
          name="author"
          />
        </p>

        <p className={classes.actions}>
          <Link type="button" to="..">Cancel</Link>
          <button>Submit</button>                 {/*submit type button by default*/}
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;


// "Form" will pass to the action function a data object
// where we can destructure out the "request" object containing the data in formData format
// async as formData yields a promise
export async function action ({request}) {

    const formData = await request.formData();

    //take out data from formData
    const postData = Object.fromEntries(formData);  // create a key value object { body: "...", author: "..."}

   //  send postData to the backend for storage
   const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  });

  // redirect to "/"
  return redirect("/");
}