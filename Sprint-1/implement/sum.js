function sum(array) {
  const numbers = array.filter(item => typeof item === 'number');
  return numbers.reduce((total, num) => total + num, 0);
}

module.exports = sum;