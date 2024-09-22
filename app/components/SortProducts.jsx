'use client'

import { useSearchParams } from 'next/navigation'

export default function SortProducts() {
  const searchParams = useSearchParams()

  function updateSorting(sortOrder) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return (
    <>
  <button 
    onClick={() => updateSorting('asc')} 
    className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
  >
    Sort Ascending
  </button> 
  <br />
  <button 
    onClick={() => updateSorting('desc')} 
    className="bg-green-500 text-white px-4 py-2 m-2 rounded"
  >
    Sort Descending
  </button>
</>

  )
}
