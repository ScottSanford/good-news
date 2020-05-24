export default function titleCase(str) {

	let words = str.toLowerCase().split(' ')
	for (let i = 0;i < words.length;i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1)
	}
	return words.join(' ')
}