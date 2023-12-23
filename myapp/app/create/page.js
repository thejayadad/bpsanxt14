import React from 'react'
import { addPost } from '@/lib/actions'
const CreatePost = () => {
  return (
    <section className='px-4 py-8'>
        <form
        action={addPost}
        className='flex flex-col'
        >
            <label>Title</label>
        <input type="text" placeholder="Title..." name="title" required />
        <label>Description</label>
        <input type="text" placeholder="Description..." name="desc" required />
        <label>Title</label>
        <input type="text" placeholder="Image..." name="imgUrl" required />
        <button
        type='submit'
        >Create</button>

        </form>
    </section>
  )
}

export default CreatePost