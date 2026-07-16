import request from "supertest";
import { expect } from "chai";

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("Posts API", () => {
    it("should return a post by id", async () => {
        const response = await request(BASE_URL)
            .get("/posts/1")
            .expect(200);
        expect(response.body.id).to.equal(1);
        expect(response.body.title).to.be.a("string");
        expect(response.body.body).to.be.a("string");
        expect(response.body.userId).to.be.a("number");
    });
});