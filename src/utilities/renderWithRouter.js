import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

/**
 * this is a handy function that I would utilize for any component
 * that relies on the router being in context
 * @param {JSX.Element} ui
 * 	The React Element in testing
 * @param {Object} param1 
 * 	Object that contains route and history
 * @returns {Object}
 * 	An object that contains a wrapped React component inside the Router
 */
export const renderWithRouter = (
	ui,
	{
		route = '/',
		history = createMemoryHistory({ initialEntries: [route] })
	} = {}) => {
	return {
		...render(<Router history={history}>{ui}</Router>),
		// return history in case we need access to the routing history
		history
	}
}
