import { expect } from 'chai';
import { config } from '../config/env.js';
import { postsService } from '../services/posts.service.js';
import {
  createPostPayload,
  createUpdatedPostPayload
} from '../utils/post.factory.js';

describe('Posts lifecycle tests', function () {
  this.timeout(config.timeout);

  let basePayload;
  let createdPostIds = [];
  let postId;

  before(function () {
    basePayload = createPostPayload({
      title: 'Payload pregătit în before'
    });
  });

  beforeEach(async function () {
    const createResponse = await postsService.createPost(basePayload);

    expect(createResponse.status).to.equal(201);

    postId = createResponse.body.id;
    createdPostIds.push(postId);
  });

  afterEach(function () {
    postId = undefined;
  });

  after(async function () {
    for (const id of createdPostIds) {
      await postsService.deletePost(id);
    }

    createdPostIds = [];
  });

  it('should get a post created in beforeEach', async function () {
    const response = await postsService.getPostById(postId);

    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(postId);
    expect(response.body.title).to.equal(basePayload.title);
  });

  it('should update a post created in beforeEach', async function () {
    const updatePayload = createUpdatedPostPayload();

    const response = await postsService.updatePost(postId, updatePayload);

    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(postId);
    expect(response.body.title).to.equal(updatePayload.title);
    expect(response.body.body).to.equal(updatePayload.body);
  });
});