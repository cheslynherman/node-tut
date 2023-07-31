// var log = {
//     info: function (info) {
//         console.log ("Info" + info);
//     },
//     warning: function (warning) {
//         console.log("Warning" + warning);
//     },
//     error: function (error) {
//         console.log ("Error" + error);
//     }
// };

// module.exports = log

// var myLogModule = require ("./log.js");
// myLogModule.info ("Node.js started");

// module.exports.log = function (msg) {
//     console.log(msg);
// };

module.exports = function (msg) {
    console.log(msg);
};
