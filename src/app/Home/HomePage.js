import React from 'react'
import useFetch from '../../utilities/useFetch'
import { useHistory, useParams } from 'react-router-dom'
import apiUrl from './api-url'
import setDocumentTitle from '../../utilities/document-title'

import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import GridSkeleton from '../../components/GridSkeleton/GridSkeleton'
import Title from '../../components/Title/Title'

const HomePage = () => {

	const history = useHistory()
	const params = useParams()

	setDocumentTitle('Good News')

	const apiKey = process.env.REACT_APP_NYTAPIKEY
	const { response, error } = useFetch(apiUrl(params.sectionId, apiKey))

	const pageTitle = 'Explore'

	const activeComponent = error
		// if API casts an error, navigate to the Error component
		? history.push('/error')
		// check for a response
		: !response
			// Loading State
			? <GridSkeleton />
			// List/Grid View
			: <ArticleGrid articles={response.results} />

	return (
		<div>
			<Title title={pageTitle} section={params.sectionId} />
			{activeComponent}
		</div>
	)
}

export default HomePage