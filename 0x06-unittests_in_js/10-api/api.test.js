const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Index page', () => {
    it('should return status 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should return the correct message', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});

describe('Cart page', () => {
    it('should return status 200 when id is a number', (done) => {
        chai.request(app)
            .get('/cart/12')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should return the correct message when id is a number', (done) => {
        chai.request(app)
            .get('/cart/12')
            .end((err, res) => {
                expect(res.text).to.equal('Payment methods for cart 12');
                done();
            });
    });

    it('should return status 404 when id is not a number', (done) => {
        chai.request(app)
            .get('/cart/hello')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});

describe('Available payments page', () => {
    it('should return the correct payment methods object', (done) => {
        chai.request(app)
            .get('/available_payments')
            .end((err, res) => {
                expect(res.body).to.deep.equal({
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                });
                done();
            });
    });
});

describe('Login page', () => {
    it('should return the correct message when a username is sent', (done) => {
        chai.request(app)
            .post('/login')
            .send({ userName: 'Betty' })
            .end((err, res) => {
                expect(res.text).to.equal('Welcome Betty');
                done();
            });
    });
});
