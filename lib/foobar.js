var Foobar = module.exports = function(str) {
  this.bar = str;
  this.str = str;
};

Foobar.prototype.foobar = function() {
  return "foobar";
};
