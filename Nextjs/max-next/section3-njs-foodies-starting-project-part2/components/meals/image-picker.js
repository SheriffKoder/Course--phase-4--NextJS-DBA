
"use client"
import React, { useRef, useState } from 'react'
import classes from "./image-picker.module.css"
import Image from 'next/image';

// Image input
// show a preview of the image uploaded through the Image input

const ImagePicker = ({label, name}) => {

    const imageInput = useRef();

    // handle button to activate the image input
    const ImagePickerButton = () => {
        imageInput.current.click();
    }

    // update state to update the ui and show a preview as soon as we have an image
    const [pickedImage, setPickedImage ] = useState();

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        // no file selected
        if (!file) {
            setPickedImage(null);
            return;
        }

        // convert the image file to a data url
        // FileReader is built in javascript
        const fileReader = new FileReader();

        // function that will be triggered by fileReader when readAsDataUrl is done
        fileReader.onload = () => {
            // access the data read url
            // and store it in the state
            setPickedImage(fileReader.result);

        };

        fileReader.readAsDataURL(file);

    }




  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            {/* show a preview of the image uploaded */}
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} fill alt="The image selected by the user"/>}
            </div>

            {/* hidden image input */}
            <input type="file" id={name}
            className={classes.input}
            accept="image/png, image/jpeg" name={name}
            ref={imageInput}
            // multiple
            onChange={handleImageChange}
            required
            />

            <button className={classes.button} type="button"
            onClick={ImagePickerButton}>
                Pick an Image
            </button>
        </div>
    </div>
  )
}

export default ImagePicker