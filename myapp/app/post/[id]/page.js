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
        <Link className='text-xs text-orange tracking-widest font-medium title-font mb-1' href={`/profile/${post._id}`}>{post.creator}</Link>

        <img className='sm:h-[34rem] mt-10 w-full object-contain' src={post.imgUrl} />
      </div>

      <div className='mx-auto mt-10 max-w-screen-lg space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700'>
        <p>{post.desc}</p>
      </div>

      <div className='w-16 h-1 rounded-md bg-orange inline-flex mb-8'></div>

      <h2 className='text-lg lg:text-2xl font-bold text-gray-900 mb-8'>Comment Section</h2>

      <form className='mb-6 flex max-w-screen-md mx-auto items-center' action={addComment}>
  <div className='flex-1 flex items-stretch py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-liteYellow'>
    <textarea
      className='flex-1 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none resize-none'
      type="text"
      placeholder="Leave a comment..."
      name="title"
      required
    />
    <input type='hidden' name='postId' defaultValue={post._id.toString()} />
  </div>
  <button
    type='submit'
    className='px-4 py-2 font-semibold text-white bg-orange rounded-lg hover:bg-liteYellow'
  >
    Comment
  </button>
</form>



      <Link href={`/post/${post.id}/comment`}>See Comments</Link>

      <div className='space-y-4'>
        {comments.map((comment) => (
          <div key={comment.id} className='p-6 border border-gray-300 rounded-lg'>
            <footer className='flex justify-between items-center mb-2'>
              <div>
                <span className='text-gray-900 font-semibold'>{comment.title}</span>
              </div>
            </footer>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default SinglePost