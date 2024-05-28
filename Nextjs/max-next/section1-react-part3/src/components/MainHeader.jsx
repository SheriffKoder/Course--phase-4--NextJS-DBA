
import React from "react"
import classes from "./MainHeader.module.css"
import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={classes.header}>
        <h1 className={classes.logo}>
            <MdMessage />
            React Poster
        </h1>

        <Link className={classes.button} to="/create-post">
            <MdPostAdd size={18}/>
            New Post
        </Link>
    </header>

  )
}

export default MainHeader