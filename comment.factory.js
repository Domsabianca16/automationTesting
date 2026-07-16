export function createCommentPayload(overrides = {}) {
    return {
        postId: 1,
        name: 'Comentariu test',
        email: 'test@example.com',
        body: 'Body creat din test',
        ...overrides
    };
}

export function createUpdatedCommentPayload(overrides = {}) {
    return {
        postId: 1,
        name: 'Comentariu modificat',
        email: 'updated@example.com',
        body: 'Body modificat din test',
        ...overrides
    };
}