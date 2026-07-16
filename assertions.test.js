import request from "supertest";
import { expect } from "chai";

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("Posts API", () =>{
    it("should validate the json response", async () => {
    const response ={
        status: 200,
        data:{
            id: 10,
            name: "Maria Popescu",
            email: "maria@test.com",
            roles : ["user"],
            active: true
        }
    };
    expect(response.status).to.eql(200);
    expect(response.data.id).to.be.a("number");
    expect(response.data.name).to.be.a("string");
    expect(response.data.email).contains("@");
    expect(Array.isArray(response.data.roles)).to.eql(true);
    expect(response.data.active).to.be.a("boolean");
});
  it('should validate the JSON response', async ()=>{
    const response ={
        "status":200,
        "id": 5,
        "title": "Laptop",
        "price": 4999,
        "inStock": true,
        "tags": ["electronics","sale"]
    };
    expect(response.status).to.equal(200);
    expect(response.id).to.be.a("number");
    expect(response.title).to.be.a("string");
    expect(response.price).to.be.a("number");
    expect(response.inStock).to.be.a("boolean");
    expect(response.tags).to.be.a("array");
    expect(response.tags).to.include("sale");
  })
})