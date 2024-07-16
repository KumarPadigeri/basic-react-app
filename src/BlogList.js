import { Link } from "react-router-dom";

const BlogList = ({ title, blogs }) => {
    return (
        <div className="blog-list">
            <h1> {title} </h1>
            {blogs.map((blog) => (
                console.log(blog.id),
                <div className="blog-preview" key={blog.id}>


                    <Link to={`/blogs/${blog.id}`} >
                       
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                        {/* <p>{blog.body}</p> */}
                    </Link>
                    {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button> */}
                </div>
            ))
            }

        </div >

    );
}
export default BlogList;