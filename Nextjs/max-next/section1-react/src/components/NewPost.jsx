import classes from './NewPost.module.css';

function NewPost({onBodyChange, onAuthorChange, enteredBody, hideModalHandler}) {



  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange}
        placeholder="Something here"/>
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required placeholder="Max"
        onChange={onAuthorChange}/>
      </p>

      <p className={classes.actions}>
        <button type="button" onClick={hideModalHandler}>Cancel</button>
        <button>Submit</button>                 {/*submit type button by default*/}
      </p>
    </form>
  );
}

export default NewPost;