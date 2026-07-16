import request from "supertest";
import { expect } from "chai";

const api = request('http://localhost:3000');

describe("POST API test", function() {

    const postsData = [
        { 
        title: 'Post 1',
        body: 'Body pentru post 1', 
        userId: 1 
        },
        { 
        title: 'Post 2', 
        body: 'Body pentru post 2', 
        userId: 2 
        },
        { 
        title: 'Post 3', 
        body: 'Body pentru post 3', 
        userId: 3 
        }
    ];

    for (const payload of postsData) {
        it(`should create a post: ${payload.title}`, async function () {
          
            const createResponse = await api
                .post('/posts')
                .send(payload)
                .expect(201);

            const createdPost = createResponse.body;

          
            expect(createdPost).to.have.property('id');
            expect(createdPost.title).to.equal(payload.title);
            expect(createdPost.body).to.equal(payload.body);
            expect(createdPost.userId).to.be.a('number');

            const postId = createdPost.id;

            const getResponse = await api
                .get(`/posts/${postId}`)
                .expect(200);

            expect(getResponse.body.title).to.equal(payload.title);
        });
    }
});