import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from './HomePage'

test('renders the title of the page', () => {
	render(<MemoryRouter><HomePage /></MemoryRouter>)
	expect(screen.getByText(/Explore/i)).toBeInTheDocument()
})