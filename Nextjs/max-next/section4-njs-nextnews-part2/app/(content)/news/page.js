
import NewsList from "@/components/news-list"
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {


  const news = await getAllNews();

  return (
    <main>
        <h1>News Page</h1>
        <NewsList news={news} />
    </main>
  )
}

export default NewsPage;