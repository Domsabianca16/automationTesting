import request from "supertest";
import { expect } from "chai";

const api = request('https://dummyjson.com');

describe('Authentication flow', function (){
    this.timeout(5000);

    it('should login, save token and access user details', async function () {
        const response = await api
        .post('/auth/login')
        .send({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30
        })
        .expect(200);

        console.log(response.body);

        expect(response.body).to.have.property('accessToken');
        expect(response.body).to.have.property('refreshToken');
        expect(response.body.id).to.equal(1);
        expect(response.body.username).to.equal('emilys');
        expect(response.body.email).to.be.a('string');
        

        const accessToken = response.body.accessToken;

        const userResponse = await api.get('/auth/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

        console.log(userResponse.body);

        expect(userResponse.body.id).to.equal(1);
        expect(userResponse.body.username).to.equal('emilys');
        expect(userResponse.body.lastName).to.equal('Johnson');
        expect(userResponse.body.email).to.be.a('string');
        expect(userResponse.body.address.city).to.equal('Phoenix');
        

        
    });
})