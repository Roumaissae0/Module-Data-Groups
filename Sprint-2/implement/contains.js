function contains(obj, property) {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
    return false;
  }
  return obj.hasOwnProperty(property);
}

module.exports = contains;