// parser.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fs = require('fs');

const parser = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        const result = lines.map((line) => {
          const parts = line.split(',');
          return {
            id: parts[0].trim(),
            name: parts[1].trim(),
            age: parts[2].trim()
          };
        });
        resolve(result);
      }
    });
  });
};

module.exports = parser;