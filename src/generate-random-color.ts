/**
 * generate a random hex color code
 *
 * @returns {string}      random color hex code
 */
const generateRandomColor = (): string => Math.floor(Math.random() * 16777215).toString(16);

export default generateRandomColor;
