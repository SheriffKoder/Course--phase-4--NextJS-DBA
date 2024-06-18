import React from 'react'

// [slug] layout
const NewsDetailLayout = ({children, modal}) => {
  return (
    <>
    {modal}
    {children}
    </>
  )
}

export default NewsDetailLayout