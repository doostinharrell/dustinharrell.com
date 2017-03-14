/**
 * Handlebars block helper that repeats the content inside of it n number of times.
 * @param {integer} lvalue - first value.
 * @param {operator} operator - operator used to calculate.
 * @param {integer} rvalue - second value.
 * @example
 * {{math 5 "+" 2}} would return 7.
 * @returns Returns the result.
 */
module.exports = function(lvalue, operator, rvalue) {
  lvalue = parseFloat(lvalue);
  rvalue = parseFloat(rvalue);

  return {
    "+": lvalue + rvalue,
    "-": lvalue - rvalue,
    "*": lvalue * rvalue,
    "/": lvalue / rvalue,
    "%": lvalue % rvalue
  }[operator];
};