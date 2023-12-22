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
        <div className='max-w-screen-xl mx-auto'>
       <div className='flex flex-col gap-2'>
       <span>{post.title}</span>
       <Link href={`/profile/${post._id}`}>{post.creator}</Link>
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