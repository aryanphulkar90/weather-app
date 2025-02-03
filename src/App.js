import React from 'react'
import styles from './App.module.css'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'

const App = () => {
  return (
    <div className={styles.app}>
      <SearchBar/>
      <SearchResult/>
    </div>
  )
}

export default App