import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'; 

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-200 mt-4">
            <div>
                <h3 className="bg-green-400 text-black border-green-800 text-center p-4">Reading Time {readingTime}</h3>
            </div>
            <h3 className="text-center text-2xl pt-5">Bookmark{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    // bookmark: PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmarks;