import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utilities/renderWithRouter'
import HomePage from './HomePage'

test('navigating to the Home Page', () => {

	renderWithRouter(<HomePage />)
	expect(screen.getByTestId('homePage')).toBeInTheDocument()
})

test('the title of the homepage should be "Explore today" ', () => {

	renderWithRouter(<HomePage />)
	expect(screen.getByText('Explore')).toBeInTheDocument()
	expect(screen.getByText('today')).toBeInTheDocument()
})