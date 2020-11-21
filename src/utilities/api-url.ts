import constants from './constants'

/**
 * The utility function builds out the api url for the NYT api.
 * @param {string} section 
 * 	The New York Times API section type.
 * @returns {string}
 * 	The API String with apiKey
 */
const apiUrl = (section: string): string => {

	const { apiKey, baseApiUrl } = constants

	// wrapper function to extract New York Times API URL
	let result = ''

	if (section && apiKey) {
		// section when a NavLink is clicked
		result = `${baseApiUrl}/${section}.json?api-key=${encodeURI(apiKey)}`
	} else if (apiKey) {
		// default root api call
		result = `${baseApiUrl}/us.json?api-key=${encodeURI(apiKey)}`
	}

	return result
}

export default apiUrl