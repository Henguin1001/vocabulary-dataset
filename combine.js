var fs = require('fs');
var s300_raw = require('./SAT300.json'),
  s6000_raw = require('./SAT6000.json');
var s300 = {}, s6000 = {};
var transform = (input, output)=>input.forEach((e)=>{output[e.word]=e.def});
transform(s300_raw, s300);
transform(s6000_raw, s6000);

var combined = Object.assign({}, s6000, s300);
var combined_json = JSON.stringify(combined);
fs.writeFileSync('./combined.json', combined_json);
