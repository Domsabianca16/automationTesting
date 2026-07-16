import request from "supertest";
import { expect } from "chai";

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("Users API", () => {
    it("should return a get by id", async () => {
        const response = await request(BASE_URL)
            .get("/users/1")
            .expect(200);
        expect(response.body.id).to.equal(1);
        expect(response.body.name).to.not.be.undefined;
        expect(response.body.email).to.include('@');
        expect(response.body.address.city).to.not.be.undefined;
    });
});