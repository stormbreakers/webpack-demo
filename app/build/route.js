'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Route;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
function Route(app) {
    app.get('*', function (req, res) {
        res.send('Hello Joy');
    });
}
// module.exports = function Route(app) {
//     app.get('*', function (req, res) {
//         res.send('Hello Joy');
//     });
// }
