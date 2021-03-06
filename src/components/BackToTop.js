import React, { useState, useEffect } from 'react';

const ScrollTopArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop);
        };
    });

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="scrollTop" onClick={scrollTop}>
            <svg
                viewBox="0 0 16 16"
                style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                />
            </svg>
        </div>
    );
};

export default ScrollTopArrow;
