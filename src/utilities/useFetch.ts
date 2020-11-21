import { useEffect, useState } from 'react'

interface UseFetchResponse<T> {
	response: T | null
	error: Error | null
}

const useFetch = <T>(url: string): UseFetchResponse<T> => {

	const [response, setResponse] = useState<T | null>(null)
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

	return { response, error }
}

export default useFetch
