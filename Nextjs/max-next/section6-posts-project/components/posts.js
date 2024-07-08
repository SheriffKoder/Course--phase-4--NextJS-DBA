"use client"

// @components/posts.js's Posts component uses the useOptimistic hook
// which triggers a function that finds the post with the given id in the previous posts
// inverts the isLiked value for it, returns the updated posts

// which means the posts object used will be of the optimisticPosts
// and each post contains a button wrapped in a form that has an action attribute that triggers
// the optimistic callback function with the aid of the .bind

// Flow of execution
// Posts > Post with action prop = updatedPost > single button form action uses updatedPost
// updatedPost triggers the optimistic callback which in return updates the optimisticPosts used outside


import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/posts';
import { useOptimistic } from "react"



function Post({ post, action }) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            {/* .bind takes two arguments
            the first is what this keyword will refer to, in this case null
            the second will be the first argument, third second argument and so on 
            when that function is executed in the future*/}
            <form action={action.bind(null, post.id)} className={post.isLiked ? "liked" : ""}>
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}


// the optimistic hook basically let us define in it a callback
// that in the end returns a value that will update the spread out value
// we only use the spread out value and the hook updates it like useState
// so we can spread from this hook the posts we are using and the callback function pointer
// we will pass to the posts which will be the first argument to the callback
// and will pass an external argument to the callback of id

function updateOptimisticPostsCallback (prevPosts, updatedPostId) {
    
  // find the post by the passed Id
  const updatedPostIndex = prevPosts.findIndex(post => post.id === updatedPostId);

  if (updatedPostIndex === -1) {
    return prevPosts;
  }

  const updatedPost = {...prevPosts[updatedPostIndex]};
  // invert the like for this post
  updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
  updatedPost.isLiked = !updatedPost.isLiked;

  const newPosts = [...prevPosts];
  newPosts[updatedPostIndex] = updatedPost;

  return newPosts


}

export default function Posts({ posts }) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, updateOptimisticPostsCallback);

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatedPost(postId) {
    updateOptimisticPosts(postId);  // return updated posts
    await togglePostLikeStatus(postId); // update the post in the database
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatedPost}/>
        </li>
      ))}
    </ul>
  );
}
