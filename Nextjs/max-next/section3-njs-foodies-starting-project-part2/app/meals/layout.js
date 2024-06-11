import React from 'react'

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals added by the community',
};


const MealsLayout = ({children}) => {
  return (
    <>
        <p>Meals Layout</p>
        {children}
    </>
  )
}

export default MealsLayout

