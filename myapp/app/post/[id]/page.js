import React from 'react'
import { fetchPost } from '@/lib/data';

const SinglePost = async ({params}) => {
    const { id } = params;
    const post = await fetchPost(id)
  return (
    <section className='px-4 py-8'>
        <div className='max-w-screen-xl mx-auto'>
       <div className='flex flex-col gap-2'>
       <span>{post.title}</span>
        <span>{post.creator}</span>
       </div>
       <h2>All Comments</h2>
        </div>
    </section>
  )
}

export default SinglePost