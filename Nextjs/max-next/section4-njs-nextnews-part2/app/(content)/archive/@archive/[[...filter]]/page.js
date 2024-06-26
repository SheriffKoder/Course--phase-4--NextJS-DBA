import NewsList from '@/components/news-list'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import React, { Suspense } from 'react'
import Link from 'next/link';



async function FilterHeader ({year, month}) {



    const availableYears = await getAvailableNewsYears();
    let  links = availableYears;


    // get an error if entered url is out of our boundaries
    if (
        (year && !availableYears.includes(year)) ||
    (month && 
        !getAvailableNewsMonths(year).includes(month))
    ) {
        throw new Error("Invalid filter.");
    }

    
    // year and no month
    if (year && !month) {

        links = getAvailableNewsMonths(year);
    }

    // year and month
    if (year && month) {
        links = [];
    }

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => {

                    const href = year ?  `/archive/${year}/${link}` : `/archive/${link}`;

                    return <li key={link}>
                        <Link href={href}>{link}</Link>
                    </li>}
                    )}
                </ul>
            </nav>
        </header>
    );
}


// async data fetching for the news to wrap the news cards in a suspense boundary
async function FilteredNews({year, month}) {
    let news;
    if (year && !month) {
        news = await getNewsForYear(year);
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    return newsContent;

}



const FilteredNewsPage = async ({params}) => {
    const filter = params.filter;
    // const news = getNewsForYear(newsYear);
    const selectedYear = filter?.[0];   // first element in the url after /archive
    const selectedMonth = filter?.[1];   // first element in the url after /archive/year
    
    







    
    return (
        <>
        <Suspense fallback={<p>Loading filtered months...</p>}>
            <FilterHeader year={selectedYear} month={selectedMonth}/>
        </Suspense>
        
        <Suspense fallback={<p>Loading filtered news...</p>}>
            <FilteredNews year={selectedYear} month={selectedMonth} />
        </Suspense>
        
    </>
    )
}

export default FilteredNewsPage