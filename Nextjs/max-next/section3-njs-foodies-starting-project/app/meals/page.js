import Link from 'next/link'
import React, { Suspense } from 'react'

import classes from "./page.module.css"
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

async function Meals () {
    const meals = await getMeals();

    return <MealsGrid meals={meals}/>
  }
// server components can be converted to async functions
// const MealsPage = async () => {

  // const meals = await getMeals();

const MealsPage = () => {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created 
          <span className={classes.highlight}>
          by you
          </span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>

      <main className={classes.main}>
        {/* now the meals component that can be used instead of the MealsGrid by itself */}
        <Suspense fallback={<p className={classes.loading}>Fetching Meals</p>}>
          <Meals />
        </Suspense>
        
      </main>
    </>
  )
}

export default MealsPage