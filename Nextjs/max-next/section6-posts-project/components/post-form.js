
"use client"
import React from 'react'
import { useFormState } from "react-dom";
import FormSubmit from '@/components/form-submit';



const PostForm = ({createPost}) => {
    // form action function to use, form state if this action has not been executed yet
    // state: the initial object or returned message
    // formAction: updated form action which is essentially createPost
    // where react is listening and able to get hold of any data returned by this formAction
    // so any returned from this formAction will update state
    const [state, formAction] = useFormState(createPost,{});


    return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
        <p>
            {state.errors && <ul className="form-errors">
                {state.errors.map((error)=>(
                    <li key={error}>
                        {error}
                    </li>
                ))}
            </ul>}
        </p>
      </form>
    </>
  );
}

export default PostForm;