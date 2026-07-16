import request from "supertest";
import { expect } from "chai";

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("Comments API", () => {
    it("should return a comment by id", async () => {
        //Arange
        const commentId =1;
        const endpoint = `/comments/${commentId}`;
        // Act
        const response = await request(BASE_URL)
            .get(endpoint);
        // Assert
        expect(200);
        expect(response.body.id).to.equal(commentId);
        expect(response.body.postId).to.be.a("number");
        expect(response.body.name).to.be.a("string");
        expect(response.body.email).to.contain('@');
        expect(response.body.body).to.be.a("string");
    });

    it("should return 404 for a non-existing comment", async () =>{
        //Arange
        const commentId = 99999;
        const endpoint = `/comments/${commentId}`;
        //Act
        const response = await request(BASE_URL)
            .get(endpoint);
        // Assert
        expect(response.status).to.equal(404);
        expect(response.body).to.deep.equal({});

    })
});