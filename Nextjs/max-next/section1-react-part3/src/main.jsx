import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/Posts'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NewPost from './routes/NewPost'
import RootLayout from './routes/RootLayout'

// an array of all the routes you want to have
// layout route with App/NewPost as children
// to share the same RootLayout
const router = createBrowserRouter([
  {path: "/", element: <RootLayout/>, children: [
    { path: "/", element: <Posts/>, children: [
      { path: "/create-post", element: <NewPost />}
    ]},
      
  ]},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)