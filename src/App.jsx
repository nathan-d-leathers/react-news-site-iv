import { useEffect, useState } from 'react'

import './App.css'

import AppNav from './components/AppNav'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import SectionPage from './pages/SectionPage'

import NewsData from './data/news.json'

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import { fetchArticles } from './api/ArticlesAPI'



function App() {

  const [articles, setArticles] = useState([])

  // async function getData() {
  //   try {
  //     const jsonResponse = await axios.get('http://hn.algolia.com/api/v1/search_by_date?tags=story', {
  //       params: {
  //         tags: ("story"),
  //         hitsPerPage: 50
  //       }
  //     })
  //     console.log(jsonResponse)
  //     setArticles(jsonResponse.data.hits)
  //   }
  //   catch (error) { console.error('Error while loading page: ', error) }
  // }

  useEffect(() => {
    let response = fetchArticles()
      .then((response) => {
        setArticles(response.data.hits)
      })
  }, [])






  return (
    <div className="App">

      <AppNav />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage articles={articles} />} />
          <Route path='/articles/:articleID' element={<ArticlePage articles={articles} />} />
          <Route path='/sections/:sectionName' element={<SectionPage />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App