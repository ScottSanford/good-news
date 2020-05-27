import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

// this is a handy function that I would utilize for any component
// that relies on the router being in context
export function renderWithRouter(
	ui,
	{
		route = '/',
		history = createMemoryHistory({ initialEntries: [route] })
	} = {}) {
	return {
		...render(<Router history={history}>{ui}</Router>),
		// return history in case we need access to the routing history
		history
	}
}
