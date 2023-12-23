import React from 'react'
import { fetchPosts } from '@/lib/data'
import Link from 'next/link'

const AllPosts = async () => {
    const posts = await fetchPosts()
  return (
    <section className='px-4 py-8 bg-white sm:py-8 lg:py-12'>
      <div className='max-w-screen-xl mx-auto bg-white p-8 rounded-md h-screen'>
      <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.
        </p>
    </div>
        <div className='grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16'>
          {posts.map((post) => (
        <article className='flex flex-col group md:flex-row col-span-1 items-center' key={post.id}>
        <Link 
          className='group relative block h-56 w-full md:w-1/3 lg:w-1/2 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg'
          href={`/post/${post.id}`}
        >
          <img
            className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            src={post.imgUrl}
            alt={post.title}
          />
        </Link>
        
        <div className='flex flex-col md:ml-4 lg:ml-6 mt-4 md:mt-0 cursor-pointer'>
          <span className='text-sm text-gray-400'>{post.created}</span>
          <span className="text-sm text-gray-400">April 2, 2022</span>
      
          <h2 className="text-xl font-bold text-gray-800 transition duration-100 hover:text-orange active:text-rose-600">
            {post.title}
          </h2>
      
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.
          </p>
      
          <div>
            <a href="#" className="font-semibold text-orange transition duration-100 hover:text-rose-600 active:text-rose-700">
              Read more
            </a>
          </div>
        </div>
      </article>
      
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllPosts