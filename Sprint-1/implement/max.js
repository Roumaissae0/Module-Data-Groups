function findMax(array) {
  const numbers = array.filter(item => typeof item === 'number');
  return Math.max(...numbers);
}

module.exports = findMax;