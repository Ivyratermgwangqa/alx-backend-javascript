const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should log correct message with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(spy, 'The total is: 120');
  });

  it('should log correct message with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(spy, 'The total is: 20');
  });
});
