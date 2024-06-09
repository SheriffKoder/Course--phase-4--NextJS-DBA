
"use client"

import {useFormStatus} from 'react-dom'


export default function MealsFormSubmit () {
    
    // display "submitting..." while storing data
    const {pending} = useFormStatus();
    // returns an object with various properties
    // has pending property of true or false

    // disabled or enabled based on the pending status
    return <button disabled={pending}>{pending ? "Submitting..." : "Share Meal"}</button>

}