"use client"
import React from 'react'

import { usePathname } from 'next/navigation';
import Link from 'next/link';


// display links depending on subPath value, and set to active if currently visited

const NavLink = ({subPath, children}) => {
    const path = usePathname();
    console.log(subPath);

  return (
    <Link href={subPath} className={path.startsWith("/"+subPath) ? 'active' : undefined}>{children}</Link>
  )
}

export default NavLink