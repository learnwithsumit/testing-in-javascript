const path = require('path');

module.exports = {
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname),
        filename: "__bundle.js"
    }
};