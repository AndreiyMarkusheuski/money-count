const path = require('path');
const ISO6391 = require('iso-639-1');
const glob = require('glob');

exports.getLocales = function () {
    return glob.sync(path.resolve(__dirname, '../src/locales/*.json')).map(file => {
        const fileName = path.basename(file, path.extname(file));

        return {
            code: fileName,
            name: ISO6391.getNativeName(fileName),
            config: require(file),
        };
    });
};
