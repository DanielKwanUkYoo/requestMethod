var request = require('request');
var fs = require('fs');



request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {

       })
       .on('response', function (response) {
        console.log('response status' + response.statusCode)
        console.log(response.statusMessage + response.headers['content-type'])
        console.log('complete')
       })


       .pipe(fs.createWriteStream('./future.jpg'));
       console.log('downloading')
