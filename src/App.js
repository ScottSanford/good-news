import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './App.module.css'

import HomePage from './app/Home/HomePage'
import ArticlePage from './app/Article/Article'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.subtext}>This is the subtext font</div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/article/:id" component={ArticlePage} />
      </Switch>
    </div>
  );
}

export default App
