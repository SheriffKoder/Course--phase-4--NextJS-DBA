
const names = ["max", "manuel"];


// {name, body} or props.name etc.
const Post = (props) => {

    const chosenName = Math.random() > 0.5 ? names[0] : names[1];


    return (
        <div>
            <p>{chosenName}</p>
            <p>{props.body}</p>

        </div>
    );
}


export default Post;