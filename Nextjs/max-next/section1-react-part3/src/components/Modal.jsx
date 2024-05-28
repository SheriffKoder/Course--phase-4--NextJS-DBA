

import React from 'react'
import classes from "./Modal.module.css"
import { useNavigate } from 'react-router-dom'

const Modal = ({children}) => {

  const navigate = useNavigate();

  function closeHandler() {
    // navigate("/");
    // navigate("..");

  }

  return (
    <>
        {/* clicking on the background returns or closes the modal */}
        <div className={classes.backdrop} onClick={closeHandler}>
        {/* <div className={classes.backdrop} onClick={()=>{setShowModal(false)}}> */}

            <dialog open={true} className={classes.modal}>
                {children}
            </dialog>
        </div>
    </>
  )
}

export default Modal