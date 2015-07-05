/**
 * Created by rohitghatol on 7/4/15.
 */

/**
 * Created by rohitghatol on 1/13/15.
 */
var drugs = require('../controllers/substances.controller');

module.exports=function(app){

    app.route('/api/substance_warnings')
        .get(drugs.list)





};