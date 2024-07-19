import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// Dynamic metadata
// data or any other name, automatically passed by nextjs or {params} if it is a dynamic page
export async function generateMetadata(data) {
  const posts = await getPosts();
  const numberOfPosts = posts.length;

  return {
    title: `Browser all our ${numberOfPosts} posts`,
    description: "Browse all out posts"
  }

}


export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
