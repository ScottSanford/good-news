// A utility function that capitalizes the first letter of each word in a string.
const titleCase = (str) => {

	if (str === 'us') {
		return 'US'
	}

	// replace will remove the `-` between `sunday-review`
	let words = str.replace(/\W/g, ' ').toLowerCase().split(' ')
	for (let i = 0;i < words.length;i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1)
	}
	return words.join(' ')
}

export default titleCase