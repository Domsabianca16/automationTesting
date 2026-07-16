import { config } from '../config/env.js';
import { postsService } from '../services/posts.service.js'; 
import { createPostPayload } from '../utils/post.factory.js';
import { expectCreatedPost } from '../utils/posts.assertions.js';

describe('Data-driven tests for POST /posts', function () {
    this.timeout(config.timeout);

    
    const postsData = [
        createPostPayload({
            title: 'Post 1',
            userId: 1
        }),
        createPostPayload({
            title: 'Post 2',
            userId: 2
        }),
        createPostPayload({
            title: 'Post 3',
            userId: 3
        })
    ];

    
    for (const payload of postsData) {
        it(`should create post: ${payload.title}`, async function () {
            const response = await postsService.createPost(payload);
            
            
            expectCreatedPost(response, payload);
        });
    }
});