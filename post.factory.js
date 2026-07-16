export function createPostPayload(overrides = {}) {
    return {
        title: 'Post creat din test',
        body: 'Body creat din test',
        userId: 1,
        ...overrides
    };
}

export function createUpdatedPostPayload(overrides = {}) {
    return {
        title: 'Post modificat din test',
        body: 'Body modificat din test',
        userId: 1,
        ...overrides
    };
}