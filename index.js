var dir;

try {
    dir = require.resolve('beyond');
    dir = require('path').dirname(dir);
}
catch (exc) {
    dir = require('path').resolve(__dirname, '../../lib');
}

module.exports = dir;
