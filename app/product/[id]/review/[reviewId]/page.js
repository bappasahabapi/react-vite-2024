import React from 'react'
import { notFound } from 'next/navigation'

export default function ProductReview({params}) {
    const {id, reviewId}=params;

    if(reviewId >4){
        notFound()
    }
  return (
    <div>
        <h1>Product ID: {id} and Review ID: {reviewId}</h1>
    </div>
  )
}
