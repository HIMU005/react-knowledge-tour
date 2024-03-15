import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddBookMark, handleMarkedTime}) => {
    const {cover, title, reading_time, author_img, author_name, posted_date, hashtags} = blog;
    return (
        <div>
            <img className="my-4 " src={cover} alt="" />
            {/* author part  */}
            <div className="flex justify-between">
                {/* left part  */}
                <div className="flex gap-5">
                    <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
                    {/* author details  */}
                    <div className="flex flex-col">
                        <h2 className="text-[#111111] text-2xl font-bold">{author_name}</h2>
                        <h3 className="text-[#11111199] font-semibold">{posted_date}</h3>
                    </div>
                </div>
                {/* right part  */}
                <div className="flex gap-4 items-center">
                    <h1>{reading_time}min read </h1>
                    <button onClick={()=>handleAddBookMark(blog)} className=""><CiBookmark /></button>
                </div>
            </div>
            <h1 className="text-[#111111] text-4xl font-bold">{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} > <a href="">{hash}  </a></span>)
                }
            </p>
            <button className='text-purple-500 underline font-bold' onClick={()=>handleMarkedTime(reading_time)}>Mark As Read</button>
        </div>
    );
}; 
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookMark: PropTypes.func.isRequired,
    handleMarkedTime: PropTypes.func.isRequired,
}
export default Blog;