var dir;

try {
    dir = require.resolve('beyond.js');
    require('path').dirname(dir);
}
catch (exc) {
    dir = require('path').resolve(__dirname, '../../lib');
}

module.exports = dir;
