"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
// router.get('/', (req: Request, res:Response)=>{
//     res.sendFile('index.html')
// })
router.get('/tweets_list', function (req, res) {
    res.send('Lista de Tweets');
});
exports.routes = router;
//# sourceMappingURL=index.js.map