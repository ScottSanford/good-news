import { useEffect, useState } from 'react'

/**
 * Custom React Hook to fetch API data
 * @param {string} url API Url
 * @returns {Object}
 * 	Object containing the response, error, and set hook methods.
 */
const useFetch = (url) => {

	const [response, setResponse] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url)
				const json = await res.json()
				setResponse(json)
			} catch (error) {
				setError(error)
			}
		}
		fetchData()
	}, [url])

	return {
		response,
		error,
		setResponse,
		setError
	}
}

export default useFetch