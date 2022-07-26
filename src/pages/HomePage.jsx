import ArticleList from "../components/ArticleList"
import Search from "../components/Search"


function HomePage({ articles }) {


    return (
        <div>
            <Search />
            <hr />
            <h2>All Articles</h2>
            <ArticleList articles={articles} />
        </div>
    )
}

export default HomePage