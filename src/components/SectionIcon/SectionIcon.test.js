import React from 'react'
import { render } from '@testing-library/react'
import SectionIcon from './SectionIcon'

test('renders the "newspaper" icon if no section is given', () => {
	const { container } = render(<SectionIcon />)
	const svg = container.querySelector('[data-icon="newspaper"]')
	expect(svg).toBeInTheDocument()
})
