"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringLoggerExternal = exports.stringLoggerCredit = exports.stringLoggerTransaction = exports.stringLogger = exports.logString = void 0;

const util = require('util');

const fs = require('fs');

let moment = require('moment');

const fileName = moment().format('MM-DD-YYYY');
console.log("Logging passed ");

const folderName = '../Logg/';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

const stringLogger = string => {
    try {
        var log_file_err = fs.createWriteStream(__dirname + '/Logg/' + fileName + '-log', {
          flags: 'a'
        });
        log_file_err.write(util.format("\n", string));
      } catch (error) {
        console.log("Logging error: " + error);
      }
};

exports.stringLogger = stringLogger;
stringLogger("Testing");
