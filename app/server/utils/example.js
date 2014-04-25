exports.go = function (req, res/*, next*/) {
    console.log('running example middleware');
    var hash = req.params.hash || '(empty hash)';
    res.render('output', { title: 'Example', output: hash });
};
