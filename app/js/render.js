const path = require('path');
const os = require('os');

document.querySelector('#output-path').innerText = path.join(
  os.homedir(),
  'iro'
);
