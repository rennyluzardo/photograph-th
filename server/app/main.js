"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get('/', function (request, response) {
    response.send('Middleware Route');
});
var port = 3033;
app.listen(port, function () { return console.log("Server listen on " + port); });
//# sourceMappingURL=main.js.map