import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './App.module.css'

import ArticlePage from './app/Article/Article'
import HomePage from './app/Home/HomePage'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/article/:id" component={ArticlePage} />
      </Switch>
    </div>
  );
}

export default App
