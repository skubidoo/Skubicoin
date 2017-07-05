'use strict';
var CryptoJS = require("crypto-js");
var hash = process.env.HASH || "VALUE_NOT_SET";
var ctr = 0;
console.log(hash);
var i = 0;
function start(){
  while (CryptoJS.SHA256(ctr.toString()).toString() != hash.toString()) {
    ctr++;

}
  console.log('key value: ' + ctr);
  /*
  While(CryptoJS.SHA256(ctr.toString()).toString() != hash.toString())
  {
    ctr++;
  }
  */
}

start();
