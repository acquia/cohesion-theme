const assert = require('assert');
const sass = require('node-sass');

describe('Sass', function () {
  it('Should compile the scss with no errors.', function (done) {
    sass.render({
      file: 'scss/main.scss',
    }, function (err, result) {
      assert.equal(err, null);
      assert.notEqual(result.stats.includedFiles.length, 0);
      assert.equal(typeof result.css, 'object');

      done();
    });

  });
});
