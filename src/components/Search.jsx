import Form from 'react-bootstrap/Form'
import { useState, useEffect } from "react"
import ArticleTeaser from "../components/ArticleTeaser"
import { fetchArticles } from '../api/ArticlesAPI'


function Search() {

    const [searchTitle, setSearchTitle] = useState('')
    const [results, setResults] = useState([])

    const handleChange = (event) => {
        const value = event.target.value
        // console.log(`${value} val changed`)

        setSearchTitle(value)
    }

    useEffect(() => {
        if (searchTitle != '') {
            console.log(searchTitle)
            let response = fetchArticles(searchTitle)
                .then((response) => {
                    console.log(response)
                    setResults(response.data.hits)
                })
        }
        else {
            setResults([])
        }
    }, [searchTitle])

    return (
        <div>
            <Form >
                <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(event) => { handleChange(event) }}
                />

            </Form>
            <div>
                {
                    results.length > 0
                        ? <div >
                            <h2>search results</h2>
                            {results.map((article) => (
                                <ArticleTeaser key={article.objectID} {...article} />
                            ))}</div>
                        : ''
                }
            </div>
        </div>
    )
}

export default Search