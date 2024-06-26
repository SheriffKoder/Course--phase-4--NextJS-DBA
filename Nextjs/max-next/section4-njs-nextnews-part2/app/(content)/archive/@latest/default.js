import { getLatestNews } from '@/lib/news'
import React from 'react'
import NewsList from '@/components/news-list';

const LatestNewsPage = async () => {
  const latestNews = await getLatestNews();
  return (
    <>
        <h2>Latest News</h2>
        <NewsList news={latestNews}/>
    </>
  )
}

export default LatestNewsPage