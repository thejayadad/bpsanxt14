import React from 'react';
import { followUser } from '@/lib/actions';

const FollowButton = ({ sessionEmail, userEmail }) => {
  const handleFollowClick = async () => {
    try {
      if (sessionEmail !== userEmail) {
        await followUser(userEmail, sessionEmail);
        console.log(`You are now following ${userEmail}`);
      }
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  return (
    <button onClick={handleFollowClick}>
      Follow
    </button>
  );
};

export default FollowButton;
