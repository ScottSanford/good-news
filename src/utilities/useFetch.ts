import { useEffect, useState } from 'react'


const useFetch = (url: string) => {

	const [response, setResponse] = useState<{ results: NYTResponse } | null>(null)
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
