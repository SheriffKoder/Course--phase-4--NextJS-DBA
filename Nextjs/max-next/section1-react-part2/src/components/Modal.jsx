

import React from 'react'
import classes from "./Modal.module.css"


const Modal = ({children, setShowModal, hideModalHandler}) => {
  return (
    <>
        <div className={classes.backdrop}>
        {/* <div className={classes.backdrop} onClick={()=>{setShowModal(false)}}> */}

            <dialog open={true} className={classes.modal}>
                {children}
            </dialog>
        </div>
    </>
  )
}

export default Modal