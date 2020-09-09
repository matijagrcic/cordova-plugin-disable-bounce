var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
  exec(success, error, 'disableiOSBouncePlugin', 'coolMethod', [arg0]);
};
module.exports.didMoveToWindow = function (arg0, success, error) {
  exec(success, error, 'disableiOSBouncePlugin', 'didMoveToWindow', [arg0]);
};
