
import classes from "./Post.module.css"
import { Link } from "react-router-dom";

const names = ["max", "manuel"];


// {name, body} or props.name etc.
const Post = ({id, author, body}) => {

    const chosenName = Math.random() > 0.5 ? names[0] : names[1];


    return (
        // where id is appended after the currently active path
        <Link to={id}>
            <li className={classes.post}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{body}</p>
            </li>
        </Link>
    );
}


export default Post;