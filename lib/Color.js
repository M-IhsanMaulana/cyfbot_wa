const chalk = require("chalk");
const fs = require("fs");
/**
 * Get text with color
 * @param  {String} text
 * @param  {String} color
 * @return  {String} Return text with color
 */
const color = (text, color) => {
  return !color
    ? chalk.green(text)
    : color.startsWith("#")
      ? chalk.hex(color)(text)
      : chalk.keyword(color)(text);
};

/**
 * coloring background
 * @param {string} text
 * @param {string} color
 * @returns
 */
function bgColor(text, color) {
  return !color
    ? chalk.bgGreen(text)
    : color.startsWith("#")
      ? chalk.bgHex(color)(text)
      : chalk.bgKeyword(color)(text);
}

module.exports = {
  color,
  bgColor,
};
