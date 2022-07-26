import axios from 'axios'

async function fetchArticleByID(articleID) {
    let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params: {
            tags: "story_" + articleID,
        }
    })
    return response
}

async function fetchArticlesBySection(section) {
    let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params: {
            tags: "story",
            query: section
        }
    })
    return response
}

async function fetchArticles(filters = null) {
    try {
        const response = await axios.get('http://hn.algolia.com/api/v1/search_by_date?tags=story', {
            params: {
                tags: ("story"),
                hitsPerPage: 50
            }
        })
        return response
    }
    catch (error) { console.error('Error while loading page: ', error) }
}

export {
    fetchArticleByID,
    fetchArticlesBySection,
    fetchArticles
}