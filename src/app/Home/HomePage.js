import React from 'react'
import useFetch from '../../utilities/useFetch'
import { useHistory, useParams } from 'react-router-dom'
import apiUrl from './api-url'

import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import GridSkeleton from '../../components/GridSkeleton/GridSkeleton'
import Title from '../../components/Title/Title'

const HomePage = () => {

	const history = useHistory()
	const params = useParams()

	const apiKey = process.env.REACT_APP_NYTAPIKEY
	const { response, error } = useFetch(apiUrl(params.section, apiKey))

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