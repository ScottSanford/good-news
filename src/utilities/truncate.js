/**
 * Utility function to add '...' at the end of long sentences
 * @param {string} str String to be truncated with '...'
 * @param {number} num Amount of character spaces to add before '...'
 * @returns the new truncated string
 */
const truncate = (str, num) => {
	// If the length of str is less than or equal to num
	// just return str--don't truncate it.
	return str.length <= num
		? str
		// Return str truncated with '...' concatenated to the end of str.
		: `${str.slice(0, num)}...`
}

export default truncate