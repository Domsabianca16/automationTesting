import request from 'supertest';
import { config } from '../config/env.js';

const api = request(config.baseUrl);

export const postsService = {
    createPost(payload) {
        return api
            .post('/posts')
            .send(payload);
    },
    getPostById(postId) {
        return api
            .get(`/posts/${postId}`);
    },
    updatePost(postId, payload) {
        return api
            .put(`/posts/${postId}`)
            .send(payload);
    },
    deletePost(postId) {
        return api
            .delete(`/posts/${postId}`);
    }
};