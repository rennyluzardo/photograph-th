"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Twitter = require('twitter-node-client').Twitter;
var twtConf = {
    "consumerKey": "bZVyVqbW1TCN3oNNAwuZE12Uc",
    "consumerSecret": "ZDw1SQ2lgsRu6loTR7DvSARUAEmYUeUEiz8CgYNUEZRiAOAUzZ",
    "accessToken": "283903787-GrfcCsBH72pWyDA1YwWx0taKWm3BSEehTNfcUPAk",
    "accessTokenSecret": "5iNUeZpK2MaDMqlKUs4vVc3bGzDrDFyojca3zJLTYtPUz",
    "callBackUrl": ""
};
var twitter = new Twitter(twtConf);
var path = require("path");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join('/index.html'));
});
router.get('/tweets_list', function (req, res) {
    twitter.getUserTimeline({ screen_name: '_luzardorenny' }, function (error) { return res.send(error); }, function (success) { return res.send(success); });
});
exports.routes = router;
//# sourceMappingURL=index.js.map