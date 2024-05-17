import classes from './NewPost.module.css';

function NewPost(props) {



  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}
        placeholder="Something here"/>
      </p>
      <p>{props.enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required placeholder="Max"
        onChange={props.onAuthorChange}/>
      </p>
    </form>
  );
}

export default NewPost;