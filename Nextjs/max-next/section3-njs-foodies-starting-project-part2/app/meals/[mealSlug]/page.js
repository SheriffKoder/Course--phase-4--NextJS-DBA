import React from 'react'

import classes from "./page.module.css"
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'


export async function generateMetadata ({params}) {
  const meal = getMeal(params.mealSlug);

  // show the closest not found or error page in case meal not found (in database)
  // and will make generating the metadata fail
  // put before trying to access the meal variable
  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary
  };
}



const MealDetailsPage = ({params}) => {

  //getMeals find a meal document that has this id of mealSlug in the url
  const meal = getMeal(params.mealSlug);

  // show the closest not found or error page in case meal not found (in database)
  // put before trying to access the meal variable
  if (!meal) {
    notFound();
  }
  
  //regex looks for all line breaks and replace with br tag
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");



  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={`https://shkd-aws-foodies-demo.s3.eu-north-1.amazonaws.com/${meal.image}`} alt={meal.title} fill/>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions
        }}>

        </p>

      </main>
    </>
  )
}

export default MealDetailsPage