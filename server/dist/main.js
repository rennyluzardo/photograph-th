"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/', routes_1.routes);
var port = process.env.PORT || 3030;
app.listen(port, function () { return console.log("Server listen on " + port); });
//# sourceMappingURL=main.js.map