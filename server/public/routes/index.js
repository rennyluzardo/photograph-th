"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('../public/dist/index.html');
});
router.get('/tweets_list', (req, res) => {
    res.send('Lista de Tweets');
});
exports.routes = router;
//# sourceMappingURL=index.js.map