// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    console.log("Download error");
  })
  .on('response', function (response) {
    console.log('Downloading image...');
    console.log('Response Status Code: ', response.statusCode);
    console.log('Response Message: ', response.statusMessage);
    console.log('Content Type: ', response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('close', function () {
    console.log('Download complete.');
  });
