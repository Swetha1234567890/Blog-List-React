// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="sub-container">
      <ul className="list-container">
        {blogsList.map(each => (
          <BlogItem key={each.id} blogDetails={each} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
