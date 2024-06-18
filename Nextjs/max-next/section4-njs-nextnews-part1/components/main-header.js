import Link from 'next/link'
import React from 'react'
import NavLink from './nav-link'

const MainHeader = () => {

  return (
    <header id="main-header">
        
        <div id="logo">
            <Link href="/">NextNews</Link>
        </div>

        <nav>
            <ul>
                <li>
                    {/* client component outsource to a client component to use usePathname */}
                    <NavLink subPath={"news"}>News</NavLink>
                </li>
                <li>
                    <NavLink subPath={"archive"}>Archive</NavLink>
                </li>
            </ul>
        </nav>
</header>
  )
}

export default MainHeader