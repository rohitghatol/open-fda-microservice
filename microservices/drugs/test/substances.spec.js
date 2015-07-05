/**
 * Created by rohitghatol on 7/4/15.
 */
var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:3000/');


describe('Substance Warning API', function () {
   it('should return proper response',function(done){
    api.get('api/substance_warnings')
        .set('Accept','application/json')
        .expect(200)
        .end(function(err,res){
            expect(res.body).to.have.property('meta');
            expect(res.body.meta).to.not.equal(null);
            expect(res.body).to.have.property('results');
            expect(res.body.results).to.not.equal(null);
            expect(res.body.results.length).to.equal(40);
            expect(res.body.results[0]).to.have.property('term');
            expect(res.body.results[0]).to.have.property('count');

            done();
        });
   });


});