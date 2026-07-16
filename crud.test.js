import request from "supertest";
import { expect } from "chai";

const api = request('http://localhost:3000');

describe('CRUD API tests', function() {
    this.timeout(5000);

    it('should create, read, update and delete a post', async function () {
        const createPayload = {
            title: 'Post creat din test',
            body: 'Acesta este un post creat prin API automation',
            userId:1
        };
        const createResponse = await api
        .post('/posts')
        .send(createPayload)
        .expect(201);

        const createdPost = createResponse.body;

        expect(createdPost).to.have.property('id');
        expect(createdPost.title).to.equal(createPayload.title);
        expect(createdPost.body).to.equal(createPayload.body);
        expect(createdPost.userId).to.equal(createPayload.userId);

        const postId = createdPost.id;

        const getResponse = await api.get(`/posts/${postId}`)
        .expect(200);

        expect(getResponse.body.id).to.equal(postId);
        expect(getResponse.body.title).to.equal(createPayload.title);
        expect(getResponse.body.body).to.equal(createPayload.body);
        expect(getResponse.body.userId).to.equal(createPayload.userId);

        const  updatePayload = {
            title: 'Post modificat din test',
            body: 'Continut modificat prin PUT request',
            userId: 1
        };

        const updateResponse = await api
        .put(`/posts/${postId}`)
        .send(updatePayload)
        .expect(200);

        expect(updateResponse.body.id).to.equal(postId);
        expect(updateResponse.body.title).to.equal(updatePayload.title);
        expect(updateResponse.body.body).to.equal(updatePayload.body);
        expect(updateResponse.body.userId).to.equal(updatePayload.userId);

        const deleteResponse = await api.delete(`/posts/${postId}`);
        expect([200, 204]).to.include(deleteResponse.status);
        await api.get(`/posts/${postId}`)
        .expect(404);
        
    });
});

