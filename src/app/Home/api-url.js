const apiUrl = (section, apiKey) => {
	// wrapper function to extract New York Times API URL
	let result
	const baseUrl = 'https://api.nytimes.com/svc/topstories/v2'
	if (section) {
		// section when a NavLink is clicked
		result = `${baseUrl}/${section}.json?api-key=${apiKey}`
	} else {
		// default root api call
		result = `${baseUrl}/us.json?api-key=${apiKey}`
	}

	return result
}

export default apiUrl