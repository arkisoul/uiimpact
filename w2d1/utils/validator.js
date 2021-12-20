const isString = (value) => {
    return typeof value === 'string';
}

const isValid = (value) => {
    return typeof value === 'string' &&  value.length > 0;
}

module.exports.isString = (value) => {
  return typeof value === "string";
};
module.exports.isValid = isValid;