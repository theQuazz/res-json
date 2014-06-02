
var json = function(code, obj) {
  if (!obj) {
    obj  = code;
    code = 200;
  }

  this.statusCode = code;
  this.setHeader('Content-Type', 'application/json');
  this.end(JSON.stringify(obj));
};

function jsonify(req, res, next) {
  res.json = json;
  next();
};

module.exports = function(opts) {
  return jsonify;
};
