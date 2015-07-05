/**
 * Created by rohitghatol on 7/4/15.
 */
var config = require('../config/config');
var http = require('http');

exports.list = function(req,res){
    var options = {
        host: config.substance_warnings.host,
        path: config.substance_warnings.path,
        method: config.substance_warnings.method
    };

    http.request(options, function(response,err) {
        if(err){
            console.log(err);
        }
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        response.setEncoding('utf-8');

        var responseString = '';

        response.on('data', function(data) {
            responseString += data;
        });

        response.on('end', function() {
            console.log(responseString);
            var responseObject = JSON.parse(responseString);
            res.send(responseObject);
        });
    }).end();



}