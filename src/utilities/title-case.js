/**
 * A utility function that capitalizes the first letter of each word in a string.
 * @param {string} str
 * @returns {string}
 */
const titleCase = (str) => {

	/**
	 * Some section strings won't look right in the UI.
	 * Quick lookup table to return proper value.
	 */
	const lookupString = {
		'us': 'US',
		'nyregion': 'NY Region'
	}

	if (lookupString[str]) {
		return lookupString[str]
	}

	// replace will remove the `-` between `sunday-review`
	let words = str.replace(/\W/g, ' ').toLowerCase().split(' ')
	for (let i = 0;i < words.length;i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1)
	}
	return words.join(' ')
}

export default titleCase

