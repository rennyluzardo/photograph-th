"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Twitter = require('twitter-node-client').Twitter;
var twtConf = {
    "consumerKey": "9Iy40Azq1p1eGEO302pTrLl3f",
    "consumerSecret": "PPrEdjiII52jjMADKagf3qDPOWgs6wjNYxKVdKc5irmk0i0svZ",
    "accessToken": "731840353-CFVFg9ra4f18mpuDrE4XHGRPHa5nVEkXfVQNeDux",
    "accessTokenSecret": "cagJmYASdbAB5mOHYN0sDVnvDn2w2gYKRzA3K9VKUsumo",
    "callBackUrl": ""
};
var twitter = new Twitter(twtConf);
var path = require("path");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join('/index.html'));
});
router.get('/tweets_list', function (req, res) {
    twitter.getUserTimeline({ screen_name: 'MemePinta' }, function (error) { return res.send(error); }, function (success) { return res.send(success); });
});
exports.routes = router;
//# sourceMappingURL=index.js.map