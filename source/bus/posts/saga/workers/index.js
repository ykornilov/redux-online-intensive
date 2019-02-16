import { createPost } from './createPost';
import { fetchPosts } from './fetchPosts';
import { removePost } from './removePost';
import { likePost } from './likePost';
import { unlikePost } from './unlikePost';

export const workers = {
    createPost,
    fetchPosts,
    removePost,
    likePost,
    unlikePost,
};
