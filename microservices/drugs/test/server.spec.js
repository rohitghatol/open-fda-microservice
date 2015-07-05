/**
 * Created by rohitghatol on 7/4/15.
 */
var server = require('../index.js');

describe('server', function () {
    before(function () {
        server.listen(3000);
    });

    after(function () {
        server.close();
    });
});