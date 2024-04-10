'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
 
export default function NotFound() {
    const pathName =usePathname()
  return (
    <div>
      <h2>Not Found</h2>
      <p>By default,<b>not-found .</b> is a Server Component`.</p>
      <p>Could not find <span><b>{pathName}</b></span> requested resource</p>
      <Link className='text-2xl bg-indigo-200' href="/">Return Home</Link>
    </div>
  )
}