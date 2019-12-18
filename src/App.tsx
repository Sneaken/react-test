import React from 'react'
import './App.css'
import NewsIndex from './views/news/NewsIndex'
import { Switch, Route } from 'react-router-dom'
import NewsContent from './components/news/NewsContent'

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/article/:id" component={NewsContent} />
      <Route path="/" component={NewsIndex} />
    </Switch>
  )
}

export default App
