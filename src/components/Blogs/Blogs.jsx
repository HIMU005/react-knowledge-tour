import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; 


const Blogs = ({handleAddBookMark, handleMarkedTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=> {
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=>setBlogs(data))
    }, [])
    return (
        <div className="md: w-2/3">
            <h1 className="text-4xl font-semibold ">Blogs {blogs.length}</h1>
            <div>
                {
                    blogs.map(blog => <Blog
                         key={blog.id} 
                         blog={blog}
                         handleAddBookMark = {handleAddBookMark}
                         handleMarkedTime = {handleMarkedTime}
                         ></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes = {
    handleAddBookMark: PropTypes.func.isRequired,
    handleMarkedTime: PropTypes.func.isRequired,
}

export default Blogs;