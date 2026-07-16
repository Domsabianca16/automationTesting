import request from "supertest";
import { expect } from "chai";

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("Todos API", () =>{
    it("should return a get by id", async () =>{
        const todosId = 1;
        const endpoint = `/todos/${todosId}`;
        const response = await request(BASE_URL).get(endpoint);
        expect(200);
        expect(response.body.id).to.equal(todosId);
        expect(response.body.userId).to.be.a("number");
        expect(response.body.title).to.be.a("string");
        expect(response.body.completed).to.be.a("boolean");
    })
})