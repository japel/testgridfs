/**
 * FileController
 *
 * @description :: Server-side logic for managing Files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  upload: function upload(req, res) {
    req.wantsJSON = false;
    var skipperOptions = {
        uri: 'mongodb://localhost:27017/testgridfs.uploads',
        adapter: require('skipper-gridfs')
    };
    req.file('file').upload(skipperOptions, function whenDone(err, uploadedFiles) {
      if (err) return res.negotiate(err);
      else return res.ok({
        files: uploadedFiles
      });
    });
  }
};

