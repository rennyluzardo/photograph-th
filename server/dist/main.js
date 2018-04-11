"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes");
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/', routes_1.routes);
var port = 8080;
app.listen(port, function () { return console.log("Server listen on " + port); });
//# sourceMappingURL=main.js.map