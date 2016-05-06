export default function Route(app) {
    app.get('*', function (req, res) {
        res.send('Hello Joy');
    });
}
// module.exports = function Route(app) {
//     app.get('*', function (req, res) {
//         res.send('Hello Joy');
//     });
// }