"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("../routes/index");
const app = express();
app.use('/', index_1.routes);
app.listen(1011, 'Photographer TH', () => console.log('Server listen on port 1011'));
//# sourceMappingURL=main.js.map