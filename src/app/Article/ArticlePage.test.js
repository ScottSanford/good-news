import React from 'react'
import { createMemoryHistory } from 'history'
import { screen } from '@testing-library/react'
import mockData from '../../utilities/mock-data'
import { renderWithRouter } from '../../utilities/renderWithRouter'
import ArticlePage from './ArticlePage'

function renderArticleComponent() {
	return renderWithRouter(<ArticlePage />, {
		history: createMemoryHistory({
			initialEntries: [{ pathname: '/article', state: { article: mockData[0] } }],
		})
	})
}

test('navigating to the Article Page', () => {

	renderArticleComponent()
	expect(screen.getByTestId('articlePage')).toBeInTheDocument()
})

test('the article page should be in the document', () => {

	renderArticleComponent()
	const title = screen.getByText('U.S. Museums Are Reopening: To See Monet, Don a Mask')

	expect(title).toBeInTheDocument()
})