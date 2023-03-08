// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li>
      <div className="sub-container">
        <div className="mini-container">
          <h1 className="heading">{title}</h1>
          <p className="date">{publishedDate}</p>
        </div>
        <p className="text">{description}</p>
        <hr className="line" />
      </div>
    </li>
  )
}

export default BlogItem
