var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var app = express();
var router = express.Router();


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
