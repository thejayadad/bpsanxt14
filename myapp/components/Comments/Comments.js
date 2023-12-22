'use client'
import React, { useEffect, useState } from 'react';
import { fetchComments } from '@/lib/data';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

useEffect(() => {
  const fetchPostComments = async () => {
    try {
      const fetchedComments = await fetchComments(postId);
      console.log("Fetched Comments: ", fetchedComments);
      setComments(fetchedComments);
    } catch (error) {
      console.error(error);
    }
  };

  fetchPostComments();
}, [postId]);


  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>{comment.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
