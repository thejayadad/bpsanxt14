'use client'
import React, { useEffect } from 'react';
import { followUser } from '@/lib/actions';
import FollowButton from '../buttons/FollowButton';
import getServerUser from '@/lib/getServerUser';

const Follow = ({ userEmail }) => {
  const handleFollow = async () => {
    try {
      const sessionUser = await getServerUser();
      if (sessionUser.email !== userEmail) {
        await followUser(userEmail, sessionUser.email);
        console.log(`You are now following ${userEmail}`);
      }
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  useEffect(() => {
    handleFollow();
  }, []); // This empty dependency array ensures that handleFollow runs only once on mount

  return (
    <div>
      <FollowButton userEmail={userEmail} />
    </div>
  );
};

export default Follow;
