"use client" // because of useFormState

import classes from './page.module.css';
import ImagePicker from '@/components/meals/image-picker';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
import shareMeal from '@/lib/submit';

// use the returned object from shareMeal function on invalid input
import {useFormState} from 'react-dom';


export default function ShareMealPage() {

  // arguments (server action, initial state of this component)
  // returns the current state of this form, which will be null or the returned object of message when an error occurs on shareMeal
  // formAction, value for the form action prop which will be the shareMeal we used directly before
  // useFormState state will pass another parameter before formData to shareMeal
  const [state, formAction] = useFormState(shareMeal, {message: null});



  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {/* behind the scenes, create a request and send it to the next.js server serving the website and trigger this function on the server as defined in it  */}
        {/* <form className={classes.form} action={shareMeal}> */}
        <form className={classes.form} action={formAction}>

          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name"  />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            {/* <button type="submit">Share Meal</button> */}
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}