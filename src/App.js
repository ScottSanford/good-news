import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import styles from './App.module.css'

import ArticlePage from './app/Article/ArticlePage'
import Error from './components/Error/Error'
import HomePage from './app/Home/HomePage'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/section/:sectionId" component={HomePage} />
        <Route exact path="/:section/article" component={ArticlePage} />
        <Route exact path="/error" component={Error} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </div>
  )
}

export default App
