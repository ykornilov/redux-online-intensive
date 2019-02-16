import { createPost } from './createPost';
import { fetchPosts } from './fetchPosts';
import { removePost } from './removePost';
import { likePost } from './likePost';

export const workers = {
    createPost,
    fetchPosts,
    removePost,
    likePost,
};
