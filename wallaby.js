
   
console.log('Node version used by wallaby', process.version);
module.exports = function (wallaby) {
  process.env.npm_package_version = '0.0.1';
  return {
    files: ['index.js'],
    tests: ['test.js'],
    testFramework: 'mocha',
    env: {
      type: 'node',
    },
  };
};