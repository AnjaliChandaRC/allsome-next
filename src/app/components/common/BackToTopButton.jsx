'use client'
import { BackToTop } from '../../utils/icons';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const SCROLL_TO_TOP = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={SCROLL_TO_TOP} className="fixed bottom-5 right-5 green-gradient duration-300 font-bold py-1 px-1 md:py-2 md:px-2 rounded-full shadow-md z-40 hover:opacity-55">
                    <BackToTop />
                </button>
            )}
        </>
    );
};

export default BackToTopButton;