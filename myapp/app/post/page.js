import React from 'react'
import { fetchPosts } from '@/lib/data'
import Link from 'next/link'

const AllPosts = async () => {
    const posts = await fetchPosts()
  return (
    <section className='px-4 py-8'>
        <div className='max-w-screen-xl mx-auto bg-white p-8 rounded-md h-screen'>
            <h2 className='text-center'>All Post</h2>
            <div
            className='flex-col grid gap-4 sm:grid-cols-2 md:grid-cols-3'
            >


        
            {
                posts.map((post) => (
                    <div
                    className='flex flex-col col-span-1'
                    key={post.id}>

                        <Link 
                        className='relative group'
                        href={`/post/${post.id}`}>
                            <img
                            className='className="w-full h-80 object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105'
                            src={post.imgUrl}
                            alt={post.title}
                            />
                        </Link>
                        <Link href={`/profile/${post.creator}`}>
                            {post.creator}
                        </Link>
                    </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default AllPosts