
import React from "react"
import classes from "./MainHeader.module.css"
import { MdPostAdd, MdMessage } from "react-icons/md";

const MainHeader = ({onCreatePost}) => {
  return (
    <header className={classes.header}>
        <h1 className={classes.logo}>
            <MdMessage />
            React Poster
        </h1>

        <p className={classes.button} onClick={onCreatePost}>
            <MdPostAdd size={18}/>
            New Post
        </p>
    </header>

  )
}

export default MainHeader