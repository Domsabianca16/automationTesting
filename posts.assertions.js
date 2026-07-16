import { expect } from 'chai';

export function expectPostToMatch(actualPost, expectedPost) {
    expect(actualPost.title).to.equal(expectedPost.title);
    expect(actualPost.body).to.equal(expectedPost.body);
    expect(actualPost.userId).to.equal(expectedPost.userId);
}

export function expectCreatedPost(response, expectedPost) {
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expectPostToMatch(response.body, expectedPost);
}

export function expectUpdatedPost(response, postId, expectedPost) {
    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(postId);
    expectPostToMatch(response.body, expectedPost);
}