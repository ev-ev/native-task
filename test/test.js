const assert = require('assert');

const os = require('os');

const platform = os.platform();

//winAPI = require('./lib/win/build/Release/winAPI');
let winAPI;
let darwinAPI;

switch (platform) { // eslint-disable-line default-case
  case 'win32':
    describe("Windows Tests", () => {
      before(() => {
        console.log("Testing Windows modules");
      });
      describe("List of process")
    });
    break;
  case 'darwin':

    break;
}

