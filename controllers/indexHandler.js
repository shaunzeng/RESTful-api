module.exports = function(req, res, next) {
  return res.render('index', { title: 'User' });
};