import { expect } from 'chai';

export function expectCommentToMatch(actualComment, expectedComment) {
    expect(actualComment.postId).to.equal(expectedComment.postId);
    expect(actualComment.name).to.equal(expectedComment.name);
    expect(actualComment.email).to.equal(expectedComment.email);
    expect(actualComment.body).to.equal(expectedComment.body);
}

export function expectCreatedComment(response, expectedComment) {
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expectCommentToMatch(response.body, expectedComment);
}

export function expectUpdatedComment(response, commentId, expectedComment) {
    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(commentId);
    expectCommentToMatch(response.body, expectedComment);
}