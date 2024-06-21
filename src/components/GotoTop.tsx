import  { useState, useEffect, FC } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GotoTop:FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const gototop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            onClick={gototop}
            className={`${
                isVisible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500 ease-in-out bg-orange-400 cursor-pointer text-black font-bold text-3xl w-12 rounded-md animate-bounce fixed bottom-4 right-4 p-2`}
        >
            <FaArrowUp />
        </div>
    );
};

export default GotoTop;
