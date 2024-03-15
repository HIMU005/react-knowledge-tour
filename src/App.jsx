import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkedTime = time => {
    setReadingTime(time+readingTime);
  }

  const handleAddBookMark = blog => {
    setBookmarks([...bookmarks, blog]);
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto gap-6'>
        <Blogs handleAddBookMark = {handleAddBookMark} handleMarkedTime = {handleMarkedTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
    </div>
    </>
  )
}
App.PropTypes = {
  
}

export default App
