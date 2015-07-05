/**
 * Created by rohitghatol on 7/4/15.
 */
var PORT = (process.env.PORT || 3000);


var app = require('./config/express')();


//Configure express routes
require('./config/routes.js')(app);


app.listen(PORT,function(){
    console.log('listening on port '+PORT);
});