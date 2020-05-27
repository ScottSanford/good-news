import React from 'react'
import { screen, wait } from '@testing-library/react'
import { renderWithRouter } from '../../utilities/renderWithRouter'
import HomePage from './HomePage'
import useFetch from '../../utilities/useFetch'
import mockData from '../../utilities/mock-data'

// We don't want to call the real API, so let's create a mock
jest.mock('../../utilities/useFetch')

function renderStatefulComponent(mockValue) {
	// return some fake data 
	useFetch.mockResolvedValueOnce(mockValue)
	return renderWithRouter(<HomePage />)
}

test('navigating to the Home Page', () => {

	renderStatefulComponent({ response: mockData })
	expect(screen.getByTestId('homePage')).toBeInTheDocument()
})

test('the title of the homepage should be "Explore today" ', () => {

	renderStatefulComponent({ response: mockData })
	expect(screen.getByText('Explore')).toBeInTheDocument()
	expect(screen.getByText('today')).toBeInTheDocument()
})

test('the data shows the correct components', () => {

	renderStatefulComponent({ response: mockData })
	expect(screen.getByTestId('loadingGrid')).toBeInTheDocument()

	wait(() => {
		expect(screen.getByTestId('articleGrid')).toBeInTheDocument()
	})

	expect(useFetch).toHaveBeenCalled()
})

test('the error page should appear if an error occured', () => {

	renderStatefulComponent({ error: 'API Error' })
	expect(screen.getByTestId('loadingGrid')).toBeInTheDocument()

	wait(() => {
		// We should expect if the API throws an error, the error page to appear
		expect(screen.getByTestId('errorPage')).toBeInTheDocument()
		// and the article grid to not appear in the DOM
		expect(screen.getByTestId('articleGrid')).not.toBeInTheDocument()
	})

	expect(useFetch).toHaveBeenCalled()
})
