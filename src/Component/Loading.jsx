
import loading from '../assets/icons/spinning-dots.svg';  
const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img className='h-40 w-40' src={loading} alt="" />
        </div>
    );
};

export default Loading;