import { fetchPostByUser } from '@/lib/data';
import getServerUser from '@/lib/getServerUser';
import React from 'react'

const ProfilePage = async ({params}) => {
  const {email} = params;
  const decodedEmail = decodeURIComponent(email);
  const username = decodedEmail.split('@')[0];
  const sessionEmail = getServerUser()

  const postByUser = await fetchPostByUser(decodedEmail)
  console.log("Email " + email) 
  console.log("ProfileEmail " + postByUser)
  return (
    <section className='px-4 py-8'>
        <div className='max-w-screen-xl mx-auto flex flex-col h-screen'>
            <h2>Profile {username} Page</h2>
            {
              postByUser.map((post) => (
                <div key={post.id}>
                  <span>{post.title}</span>
                </div>
              ))
            }
            <div className='flex flex-col mt-6'>
            <h2>Follow Fan</h2>
            </div>
        </div>
    </section>
  )
}

export default ProfilePage