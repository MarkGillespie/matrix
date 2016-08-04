'use strict';

var Matrix = require('../..');

describe('Flip row view', function () {
    it('should set and get values', function () {
        var m = Matrix.ones(5, 8);
        var view = m.flipRowView();

        m.set(0, 3, 5);
        view.get(4, 3).should.equal(5);

        view.set(0, 0, 10);
        m.get(4, 0).should.equal(10);

        view.rows.should.equal(5);
        view.columns.should.equal(8);
    });
});
