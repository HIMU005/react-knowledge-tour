import PropTypes from 'prop-types'; 

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-5 my-1 rounded-2xl'>
            <h3 className='text-3xl font-semibold'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;