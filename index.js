const glob = require('glob');

module.exports = {
    /**
     * An easy way to add Encore entry files
     *
     * @param {Encore} encore The Encore instance
     * @param {String} filenamePattern The filename pattern for glob package
     * @param {Array<{pattern: String, entryName: String}>} entryNamePatterns The entry name search patterns,
     *   'pattern': the regexp pattern for matching entry filename,
     *   'entryName': the regexp pattern result for the actual entry name
     */
    collect: function(encore, filenamePattern, entryNamePatterns) {
        glob.sync(filenamePattern).forEach(function(filename) {
            entryNamePatterns.every(function (entryNamePattern) {
                let regexp = new RegExp(entryNamePattern.pattern);

                if (filename.match(regexp)) {
                    let entryName = filename.replace(regexp, entryNamePattern.entryName);

                    encore.addEntry(entryName, filename);

                    // Break loop
                    return false;
                }

                return true;
            });
        });
    }
};
