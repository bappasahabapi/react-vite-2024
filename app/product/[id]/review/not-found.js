import Link from 'next/link'

 
export default function ReviewNotFound() {
  return (
    <div>
      <h2>Not Found page of <b> [reviewId]</b> route is calling</h2>
      <Link className='text-2xl bg-indigo-200' href="/">Return Home</Link>
    </div>
  )
}