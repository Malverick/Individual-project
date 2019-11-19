const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./server');
chai.use(chaiHttp);

describe('server', () => {

    before(done => {
        setTimeout(() => {
            done();
        }, 1000);
    });

    it('Testing the test 1', () => {
        chai.expect(true).to.eq(true)
    });
    it('Testing the test 2', () => {
        chai.expect(false).to.eq(false)
    })
    it('Should print \'Hello World\'', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(res.text).to.eq('Hello World');
                done();
            })
    })
    describe('Gets', () => {
        it('Testing Class Retrieved', (done) => {
            chai.request(app)
                .get('/dndchars/getThingClass/1')
                .end((err, res) => {
                    chai.expect(res.status).to.eq(200);
                    chai.expect(res.text).to.eq('[{"class_id":1,"class":"Wizzard"}]');
                    done();
                })
        });
        it('Testing get Race', (done) => {
            chai.request(app)
                .get('/dndchars/getThingRace/1')
                .end((err, res) => {
                    console.log(res.text, err);
                    chai.expect(res.status).to.eq(200);
                    chai.expect(res.text).to.eq('[{"race_id":1,"race":"Human"}]');
                    done();
                })
        });
        it('testing get characters', (done) => {
            chai.request(app)
                .get('/dndchars/getThingChar/1')
                .end((err, res) => {
                    chai.expect(res.status).to.eq(200);
                    chai.expect(res.text).to.eq('[{"character_id":1,"charName":"Ed","classClassId":1,"raceRaceId":2,"class":{"class_id":1,"class":"Wizzard"},"race":{"race_id":2,"race":"High Elf"}}]');
                    done();
                })
        })
    });
    describe('Post', () => {
        it('testing post characters', (done) => {
            chai.request(app)
                .post('/dndchars/addThingChar/steve/1/1')
                .end((err, res) => {
                    chai.expect(res.status).to.eq(200);
                    chai.expect(res.text).to.eq('probably worked');
                    done();
                });
        });
    });
    describe('Delete', () => {
        it('testing delete characters', (done) => {
            chai.request(app)
                .delete('/dndchars/deleteThingChar/steve')
                .end((err, res) => {
                    chai.expect(res.status).to.eq(200);
                    chai.expect(res.text).to.eq('probably worked');
                    done();
                });
            });
        });

        describe('Update', () => {
            it('testing update characters', (done) => {
                chai.request(app)
                    .put('/dndchars/updateThingChar/steve/Edward')
                    .end((err, res) => {
                        chai.expect(res.status).to.eq(200);
                        chai.expect(res.text).to.eq('It worked probably');
                        done();
                    });
                });
            });
    //Check Chai Assertion Library for more testing.
});
