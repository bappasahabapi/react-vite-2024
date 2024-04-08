import blogs from '@/data/blog';
import React from 'react'

export default function SingleBlog({params}) {
  console.log("Rendering Single Blog ...")
    const {blogId}=params;
    const blog =blogs.find((blog)=>blog.id === blogId);
    const {title, description}=blog;
 
  return (
    <div className='p-8'>
        <h1 className="text-2xl text-center">Dynamic Route Page for Single Blog</h1>
        <h3 className='text-xl '>{title}</h3>
        <p className='mt-4 '>{description}</p>
    </div>
  )
}

