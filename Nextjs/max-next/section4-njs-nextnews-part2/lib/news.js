import sql from "better-sqlite3"; // part2

import { DUMMY_NEWS } from '@/dummy-news';

const db = sql("data.db");  // path relevant to the root directory // part2

// turn to async to use a delay promise
export async function getAllNews() {
  // return DUMMY_NEWS;
  const news = db.prepare("SELECT * FROM news").all(); // part2
  await new Promise(resolve => setTimeout(resolve, 2000));
  return news;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}