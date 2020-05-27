import React from 'react'
import { createMemoryHistory } from 'history'
import { screen } from '@testing-library/react'
import App from './App'
import mockData from './utilities/mock-data'
import { renderWithRouter } from './utilities/renderWithRouter'


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
