var utils = require('../../lib/utils');
var Page = require('../models/page');
var Text = require('../models/text');
module.exports = function(req, res, next) {
    var reqPage = req.params[0];
    Page.findOne({
        slug: reqPage
    }).populate('text').exec(function(err, data) {
        if (err) {
            console.log(err);
            return next(err);
        }
        if (!data) {
            res.render('wiki/edit', {
                title: utils.page.guessTitleFromSlug(req.params[0]),
                newPage: true
            });
        }
        console.log(data);
        res.render('wiki/edit', data);
    });
    console.log('editing the file');
}