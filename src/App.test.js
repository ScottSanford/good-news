import React from 'react'
import { screen } from '@testing-library/react'
import App from './App'
import { renderWithRouter } from './utilities/renderWithRouter'


// Test Routing Edge Cases.
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
