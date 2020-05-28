import constants from './constants'

const apiUrl = (section) => {

	const { apiKey, baseApiUrl } = constants
	// wrapper function to extract New York Times API URL
	let result

	if (section) {
		// section when a NavLink is clicked
		result = `${baseApiUrl}/${section}.json?api-key=${encodeURI(apiKey)}`
	} else {
		// default root api call
		result = `${baseApiUrl}/us.json?api-key=${encodeURI(apiKey)}`
	}

	return result
}

export default apiUrl