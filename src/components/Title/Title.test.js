import React from 'react'
import { render, screen } from '@testing-library/react'
import Title from './Title'

test('renders the title "Explore" if no title prop is passed', () => {
	render(<Title />)
	expect(screen.getByText(/Explore/i)).toBeInTheDocument()
})

test('renders the title "Chicago Bears" is title prop has a value', () => {
	render(<Title title="Chicago Bears" />)
	expect(screen.getByText(/Chicago Bears/i)).toBeInTheDocument()
})

test('renders the section "today" if no section prop is passed', () => {
	render(<Title />)
	expect(screen.getByText(/today/i)).toBeInTheDocument()
})

test('renders the section "technology" if a section prop is passed', () => {
	render(<Title section="technology" />)
	expect(screen.getByText(/technology/i)).toBeInTheDocument()
})
