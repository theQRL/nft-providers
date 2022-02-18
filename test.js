var expect = require('chai').expect;
var qrlNft = require('./index.js');
var validate = require('@theqrl/validate-qrl-address')

describe('#qrlNft version', function() {
  it(`.version should report same version as in npm package.json file (=${process.env.npm_package_version})`, function() {
    var result = qrlNft.version;
    expect(result).to.equal(process.env.npm_package_version);
  });
});

describe('#providers', function() {
  it(`should have some providers`, function() {
    var result = qrlNft.providers.length;
    expect(result).to.be.greaterThan(0);
  });
  it(`each provider should name / address(es) / url / id`, function() {
    var result = qrlNft.providers;
    result.forEach(provider => {
      expect(provider).to.have.all.keys('name', 'addresses', 'url', 'id');;
    });
  });
  it(`each provider QRL address should be valid`, function() {
    var result = qrlNft.providers;
    result.forEach(provider => {
      const { addresses } = provider;
      addresses.forEach(address => {
        expect(validate.hexString(address).result).to.equal(true);
      });
    });
  });
})