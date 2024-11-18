var expect = require('chai').expect;
var qrlNft = require('./index.js');
var validate = require('@theqrl/validate-qrl-address')

function validHexString(str) {
  let result = false;
  let reason = '';
  // trim first 2 chars if 0x
  if (str.startsWith('0x')) {
    const strNew = str.slice(2);
    if (typeof strNew === 'string' && str.length > 0) {
    result = /^[0-9A-Fa-f]+$/.test(strNew);
    // check if newStr parses to a number between 0 and 255
    if (result) {
      const num = parseInt(strNew, 16);
      result = num >= 0 && num <= 4294967295;
      if (!result) {
        reason = 'hex string out of range';
      }
    } else {
      reason = 'invalid hex string';
    }
  }
  } else {
    reason = 'missing 0x prefix';
  }
    // should be 10 chars long
  if (str.length !== 10) {
   result = false;
    reason = 'invalid length (should be 10 chars)';
  }
  if (reason !== '') {
    console.log(`validHexString(${str}) failed: ${reason}`);
  }
  return { result, reason }
}

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
  it(`each id should be a valid hex string`, function() {
    var result = qrlNft.providers;
    result.forEach(provider => {
      const { id } = provider;
      expect(validHexString(id).result).to.equal(true);
    });
  });
})