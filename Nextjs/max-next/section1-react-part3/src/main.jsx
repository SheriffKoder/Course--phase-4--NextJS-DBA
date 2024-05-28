import React from 'react'
import ReactDOM from 'react-dom/client'
// import the fetch data function that is executed when the component loads 
import Posts, {loader as postsLoader} from './routes/Posts'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"

// import the post data function that is executed when the component's Form submits
import NewPost, {action as newPostAction} from './routes/NewPost'

import RootLayout from './routes/RootLayout'

import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails'

// an array of all the routes you want to have
// layout route with App/NewPost as children
// to share the same RootLayout
const router = createBrowserRouter([
  {path: "/", element: <RootLayout/>, children: [
    { path: "/", element: <Posts/>, loader:postsLoader, children: [
      { path: "/create-post", element: <NewPost />, action: newPostAction},
      //postId will be the params used in the loader function
      { path: "/:postId", element: <PostDetails />, loader: postDetailsLoader}
    ]},
      
  ]},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)