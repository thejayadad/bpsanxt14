import React from 'react'
import { fetchPosts } from '@/lib/data'
import Link from 'next/link'

const AllPosts = async () => {
    const posts = await fetchPosts()
  return (
    <section className='px-4 py-8'>
        <div className='max-w-screen-xl mx-auto'>
            {
                posts.map((post) => (
                    <div
                    className='flex flex-col gap-2'
                    key={post.id}>
                        <Link href={`/post/${post.id}`}>
                            {post.title}
                        </Link>
                        <Link href={`/profile/${post.creator}`}>
                            {post.creator}
                        </Link>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default AllPosts