import React from 'react'
import { render, screen } from '@testing-library/react'
import Error from './Error'

test('renders the title "Uh Oh!" in the component', () => {
	render(<Error />)
	expect(screen.getByText(/Uh Oh!/i)).toBeInTheDocument()
})