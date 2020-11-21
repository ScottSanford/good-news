import React from 'react'
import useFetch from '../../utilities/useFetch'
import { useHistory, useParams } from 'react-router-dom'
import apiUrl from '../../utilities/api-url'
import constants from '../../utilities/constants'
import setDocumentTitle from '../../utilities/document-title'

import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import GridSkeleton from '../../components/GridSkeleton/GridSkeleton'
import Title from '../../components/Title/Title'
import { NYTResponse } from '../../utilities/api'

const HomePage: React.FC = () => {

	const history = useHistory()
	const params = useParams<{ sectionId: string }>()
	const { documentTitle, pageTitle } = constants

	setDocumentTitle(documentTitle)
	const { response, error } = useFetch<NYTResponse>(apiUrl(params.sectionId))

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
		<div data-testid="homePage">
			<Title title={pageTitle} section={params.sectionId} />
			{activeComponent}
		</div>
	)
}

export default HomePage