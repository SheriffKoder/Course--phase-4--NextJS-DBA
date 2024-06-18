import Link from "next/link"
import React from "react"

import { DUMMY_NEWS } from "@/dummy-news"
import NewsList from "@/components/news-list"

const NewsPage = () => {
  return (
    <main>
        <h1>News Page</h1>

        <NewsList news={DUMMY_NEWS} />
    </main>
  )
}

export default NewsPage