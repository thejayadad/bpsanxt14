import React from 'react'
import { fetchComments, fetchPost } from '@/lib/data';
import { addComment } from '@/lib/actions';
import Link from 'next/link';


const SinglePost = async ({params}) => {
    const { id } = params;
    const post = await fetchPost(id)
    const comments = await fetchComments(id)
    
  return (
    <section className='px-4 py-8'>
        <div className='max-w-screen-xl mx-auto bg-white rounded-md pt-28 text-center'>
       <div className='flex flex-col gap-2'>
        <p className='text-gray-500'>DATE HERE</p>
       <h1 className='mb-4 text-center text-2xl font-bold text-gray-900 md:mb-6 lg:text-3xl'>{post.title}</h1>
       <Link 
       className='text-xs text-orange tracking-widest font-medium title-font mb-1'
       href={`/profile/${post._id}`}>{post.creator}</Link>

        <img
        className='sm:h-[34rem] mt-10 w-full object-contain'
        src={post.imgUrl}
        />

       </div>
       <div
        className='mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700'
        >
          <p>{post.desc}</p>
        </div>
       <h2>All Comments</h2>
       <form
       className='flex flex-col max-w-md shadow-md p-6'
       action={addComment}
       >
        <input type="text" placeholder="Title..." name="title" required />
        <input type='text' hidden name='postId' defaultValue={post._id.toString()} />
        <button type='submit'>Comment</button>
       </form>
       <Link href={`/post/${post.id}/comment`}>See Comments</Link>
       {
            comments.map((comment) => (
                <div key={comment.id}>
                    <span>{comment.title}</span>
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default SinglePost