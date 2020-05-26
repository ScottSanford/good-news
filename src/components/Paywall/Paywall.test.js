import React from 'react'
import { render, screen } from '@testing-library/react'
import Paywall from './Paywall'

test('renders the title "Looks like you\'ve enjoyed this story!" in the component', () => {
	render(<Paywall />)
	expect(screen.getByText(/Looks like you've enjoyed this story!/i)).toBeInTheDocument()
})
