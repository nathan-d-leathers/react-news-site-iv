import { useParams } from 'react-router-dom'
import Article from '../components/Article'
import { useState, useEffect } from 'react'
import { fetchArticleByID } from '../api/ArticlesAPI'

function ArticlePage({ articles }) {

    let { articleID } = useParams()



    const [article, setArticle] = useState(null)

    useEffect(() => {
        let response = fetchArticleByID(articleID)
            .then((response) => {
                setArticle(response.data.hits[0])
            })
    }, [articleID])

    return (
        <div>
            <Article {...article} />
        </div>
    )
}

export default ArticlePage