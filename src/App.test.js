import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import App from './App'
import mockData from './utilities/mock-data'


// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(ui, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
  }
}

test('navigating to the Home Page', () => {

  renderWithRouter(<App />)
  expect(screen.getByText('today')).toBeInTheDocument()
})

test('navigating to the Article Page', () => {
  renderWithRouter(<App />, {
    history: createMemoryHistory({
      initialEntries: [{ pathname: '/article', state: { article: mockData[0] } }],
    })
  })

  expect(screen.getByTestId('articlePage')).toBeInTheDocument()
})

test('redirecting to the Home Page if there is a bad URL', () => {

  renderWithRouter(<App />, {
    route: '/something-that-does-not-match',
  })

  expect(screen.getByText('today')).toBeInTheDocument()
})

test('navigating to the error page', () => {

  renderWithRouter(<App />, { route: '/error' })

  expect(screen.getByTestId('errorPage')).toBeInTheDocument()
})
