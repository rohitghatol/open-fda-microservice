/**
 * Created by rohitghatol on 7/4/15.
 */
var should = require('chai').should(),
    expect = require('chai').expect;

describe('Configuration', function () {
    var config = require('../config/config')
    it ('should have valid values for host,path and method', function () {
        expect(config).to.not.equal(null);
        expect(config.substance_warnings).to.not.equal(null);
        expect(config.substance_warnings).to.have.property('host');
        expect(config.substance_warnings.host).to.not.equal(null);
        expect(config.substance_warnings).to.have.property('path');
        expect(config.substance_warnings.path).to.not.equal(null);
        expect(config.substance_warnings).to.have.property('method');
        expect(config.substance_warnings.method).to.not.equal(null);
    });
})