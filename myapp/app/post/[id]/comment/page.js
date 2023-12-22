import React from 'react'
import { fetchComments } from '@/lib/data'

const CommentPage = async ({ params }) => {
    const { id } = params;
    const comments = await fetchComments(id)
  return (
    <div>CommentPage
        {
            comments.map((comment) => (
                <div key={comment.id}>
                    <span>{comment.title}</span>
                </div>
            ))
        }
    </div>
  )
}

export default CommentPage