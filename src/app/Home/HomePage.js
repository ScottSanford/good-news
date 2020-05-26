import React from 'react'
import useFetch from '../../utilities/useFetch'
import { useHistory, useParams } from 'react-router-dom'

import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import GridSkeleton from '../../components/GridSkeleton/GridSkeleton'
import Title from '../../components/Title/Title'

const HomePage = () => {

	let apiUrl
	const apiKey = process.env.REACT_APP_NYTAPIKEY

	const history = useHistory()
	const params = useParams()

	// api key accessed through env variable
	if (params.section) {
		apiUrl = `https://api.nytimes.com/svc/topstories/v2/${params.section}.json?api-key=${apiKey}`
	} else {
		apiUrl = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${apiKey}`
	}
	const { response, error } = useFetch(apiUrl)
	const pageTitle = 'Explore'

	const activeComponent = error
		// navigate to the Error component
		? history.push('/error')
		: !response
			// Loading State
			? <GridSkeleton />
			// List/Grid View
			: <ArticleGrid articles={response.results} />

	return (
		<div>
			<Title title={pageTitle} />
			{activeComponent}
		</div>
	)
}

export default HomePage