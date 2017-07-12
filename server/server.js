// Get dependencies
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var app = express();
var router = express.Router();


// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));



router.get('/', function(req, res) {
    url = 'https://twitter.com/UMassBabyBerk';
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var json = {
                title: ""
            };
            json.title = $('[class^="TweetTextSize"]').first().text();
        }
        fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {
            console.log('File successfully written! - Check your project directory for the output.json file');
        })
        res.send('Check your console!')
    });
})


module.exports = router;

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
