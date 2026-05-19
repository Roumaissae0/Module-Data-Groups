const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');

const changes = input.trim().split('\n').map(s => Number(s.trim()));

const result = changes.reduce((freq, change) => freq + change, 0);

console.log('Part 1:', result);