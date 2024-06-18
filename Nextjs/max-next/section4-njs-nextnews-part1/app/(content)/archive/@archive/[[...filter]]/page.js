import NewsList from '@/components/news-list'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import React from 'react'
import Link from 'next/link';

const FilteredNewsPage = ({params}) => {
    const filter = params.filter;
    // const news = getNewsForYear(newsYear);
    const selectedYear = filter?.[0];   // first element in the url after /archive
    const selectedMonth = filter?.[1];   // first element in the url after /archive/year
    
    let news;
    let  links = getAvailableNewsYears();
    
    // year and no month
    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    // year and month
    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear,selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    // get an error if entered url is out of our boundaries
    if (selectedYear && !getAvailableNewsYears().includes(+selectedYear) ||
    selectedMonth && !getAvailableNewsMonths().includes(+selectedMonth)
    ) {
        throw new Error("Invalid filter.");
    }


    
    return (
        <>
        <header id="archive-header">
        <nav>
            <ul>
                {links.map(link => {

                const href = selectedYear ?  `/archive/${selectedYear}/${link}` : `/archive/${link}`;

                return <li key={link}>
                    <Link href={href}>{link}</Link>
                </li>}
                )}
            </ul>
        </nav>
    </header>
    {newsContent}
    </>
    )
}

export default FilteredNewsPage