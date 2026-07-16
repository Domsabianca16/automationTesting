import request from "supertest";
import { expect } from "chai";

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("Albums API", () => {
    it("should return a get by id", async () => {
                const albumId =1;
                const endpoint = `/albums/${albumId}`;
                // Act
                const response = await request(BASE_URL)
                    .get(endpoint);
                // Assert
                expect(200);
                expect(response.body.id).to.equal(albumId);
                expect(response.body.userId).to.be.a("number");
                expect(response.body.title).to.be.a("string");
                expect(response.body.title).to.not.be.null;
    })
    it("should have status code 404", async () =>{
        const albumId = 999999;
        const endpoint = `/albums/${albumId}`;
        const response = await request(BASE_URL)
                    .get(endpoint);
        expect(404);
        expect(response.body).to.deep.equal({});
    })
});