import request from 'supertest';
import { config } from '../config/env.js'; 

const api = request(config.baseUrl);

export const commentsService = {
    createComment(payload) {
        return api
            .post('/comments')
            .send(payload);
    },
    getCommentById(commentId) {
        return api
            .get(`/comments/${commentId}`);
    },
    updateComment(commentId, payload) {
        return api
            .put(`/comments/${commentId}`)
            .send(payload);
    },
    deleteComment(commentId) {
        return api
            .delete(`/comments/${commentId}`);
    }
};