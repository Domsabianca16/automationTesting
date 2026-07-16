import { expect } from 'chai';
import { config } from '../config/env.js';
import { postsService } from '../services/posts.service.js'; 
import {
    createPostPayload,
    createUpdatedPostPayload
} from '../utils/post.factory.js';
import {
    expectCreatedPost,
    expectPostToMatch,
    expectUpdatedPost
} from '../utils/posts.assertions.js';

describe('Posts CRUD API tests REFACTORED2', function () {
    this.timeout(config.timeout);

    it('should create, read, update and delete a post', async function () {
        //create payload for the post request
        const createPayload = createPostPayload();

        //send POST request in order to create a new 'post' - use the payload generated above as an argument for the request
        const createResponse = await postsService.createPost(createPayload);

        //validate the created post
        expectCreatedPost(createResponse, createPayload);

        //get the postID from the create 'post' response body and create a new GET request using that id
        const postId = createResponse.body.id;

        const getResponse = await postsService.getPostById(postId);

        //validate the retrieved 'post'
        expect(getResponse.status).to.equal(200);
        expect(getResponse.body.id).to.equal(postId);
        expectPostToMatch(getResponse.body, createPayload);

        //create a json payload to use it for updating the previously created 'post'
        const updatePayload = createUpdatedPostPayload();

        //send the PUT request using the generated payload and the postId
        const updateResponse = await postsService.updatePost(postId, updatePayload);
        expectUpdatedPost(updateResponse, postId, updatePayload);

        //send the DELETE request using the postId in order to delete the 'post'
        const deleteResponse = await postsService.deletePost(postId);
        expect([200, 204]).to.include(deleteResponse.status);

        //try to GET the 'post' again using the postId and validate that the resource cannot be found
        const getDeletedResponse = await postsService.getPostById(postId);
        expect(getDeletedResponse.status).to.equal(404);
    });


    it('should create a post with custom title', async function () {
    const payload = createPostPayload({
        title: 'Titlu custom pentru test'
    });

    const response = await postsService.createPost(payload);

    expectCreatedPost(response, payload);
});
});