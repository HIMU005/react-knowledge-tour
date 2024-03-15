import profile from '../../assets/images/profile.png'
const Header = () => {
    return (<>
        <div className='flex justify-between p-4 max-w-7xl mx-auto'>
            <h1 className='text-7xl font-semibold'>Knowledge Tour</h1>
            <img src={profile} alt="" />
        </div>
        <div>
            <hr />
        </div>
        </>
    );
};

export default Header;