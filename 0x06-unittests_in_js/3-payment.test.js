const sinon = require('sinon');
const Utils = require('./utils');
import assert from 'assert';
import { getPaymentTokenFromAPI } from './3-payment.js';

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM and arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(spy, 'SUM', 100, 20);

    spy.restore();
  });
});
