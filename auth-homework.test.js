import request from "supertest";
import { expect } from "chai";

const api = request('https://dummyjson.com');

describe('Authentication homework', function () {
    this.timeout(5000); 

    it('should handle full auth flow: login, invalid token, valid access, and token refresh', async function () {
        const loginResponse = await api
            .post('/auth/login')
            .send({
                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 1 
            })
            .expect(200);
        
        expect(loginResponse.body).to.have.property('accessToken');
        expect(loginResponse.body).to.have.property('refreshToken');
        
        let accessToken = loginResponse.body.accessToken;
        const refreshToken = loginResponse.body.refreshToken;

        const userResponse = await api
            .get('/auth/me')
            .set('Authorization', `Bearer ${accessToken}`)
            .expect(200);

        expect(userResponse.body.id).to.equal(1);
        expect(userResponse.body.username).to.equal('emilys');
        expect(userResponse.body.lastName).to.equal('Johnson');
        expect(userResponse.body.address.city).to.equal('Phoenix');

        const invalidToken = "Bearer 12345";
        const invalidResponse = await api
            .get('/auth/me')
            .set('Authorization', invalidToken)
            .expect(401); 
        
        const refreshResponse = await api
            .post('/auth/refresh')
            .send({
                refreshToken: refreshToken,
                expiresInMins: 30
            })
            .expect(200);


        expect(refreshResponse.body).to.have.property('accessToken');
        expect(refreshResponse.body).to.have.property('refreshToken');
        
        const newAccessToken = refreshResponse.body.accessToken;
       
        expect(newAccessToken).to.not.equal(accessToken);
    
    });
});