const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./server');
chai.use(chaiHttp);

describe('server', () => {
    it('Testing the test 1', () => {
        chai.expect(true).to.eq(true)
    });
    it('Testing the test 2', () => {
        chai.expect(false).to.eq(false)
    })
    it('Shoult print \'Hello World\'', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(res.text).to.eq('Hello World');
            done();
        })
    })
    //Check Chai Assertion Library for more testing.
});