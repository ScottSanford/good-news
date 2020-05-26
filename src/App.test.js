import React from 'react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import App from './App'


// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(ui, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests.
    history,
  }
}

test('full app rendering/navigating', () => {
  renderWithRouter(<App />)
  screen.debug()
  expect(screen.getByText('today')).toBeInTheDocument()

  userEvent.click(screen.getByRole('link', { name: 'Tech' }))
  expect(screen.getByText('technology')).toBeInTheDocument()
})
