'use strict';

describe('Service: Issues', function () {

  // load the service's module
  beforeEach(module('issuesViewer'));

  // instantiate service
  var Issues;
  beforeEach(inject(function (_Issues_) {
    Issues = _Issues_;
  }));

  it('should do something', function () {
    expect(!!Issues).toBe(true);
  });

});
