var plist = require('plist');

var obj = plist.parseFileSync('myPlist.plist');
console.log(JSON.stringify(obj));