import mongoose from 'mongoose';

const FollowerSchema = new mongoose.Schema({
  owner: { type: String, required: true },
  followers: { 
     default: [] 
    },
});

export default mongoose.models.Follower || mongoose.model('Follower', FollowerSchema);
