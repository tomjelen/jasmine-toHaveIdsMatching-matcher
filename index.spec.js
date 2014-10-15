"use strict";
var matchers = require("./index");

describe("matcher", function() {

  beforeEach(function() {
    this.addMatchers(matchers);
  });

  describe("toHaveIdsMatching", function() {
    it("passes when 'actual' has 'id' fields contains the expected values", function() {
      var objects = [ { id: 1, name: "bim"   },
                      { id: 2, name: "bam"   },
                      { id: 3, name: "busse" }];

      expect(objects).toHaveIdsMatching([1,2,3]);
    });

    it("fails when id-values differ from expected values", function() {
      var objects = [ { id: 1 },
                      { id: 2 },
                      { id: 3 }];

      expect(objects).not.toHaveIdsMatching([4,5,6]);
    });

    it("fails when 'actual' has less than expected", function() {
      var objects = [ { id: 1 },
                      { id: 2 }];

      expect(objects).not.toHaveIdsMatching([1,2,3]);
    });

    it("fails when 'actual' has an more items than expected", function() {
      var objects = [ { id: 1 },
                      { id: 2 }];

      expect(objects).not.toHaveIdsMatching([1]);
    });

    it("ignores ordering", function() {
      var objects = [ { id: 1 },
                      { id: 2 }];

      expect(objects).toHaveIdsMatching([2,1]);
    });

    it("fails when id-field is missing", function() {
      var objects = [ { x: 1 },
                      { id: 2 }];

      expect(objects).not.toHaveIdsMatching([1,2]);
    });
  });

});
