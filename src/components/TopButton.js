import React, { useEffect, useRef } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import './TopButton.css';

function TopButton() {
    const btnRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const handleScroll = () => {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            btnRef.current.style.display = "block";
        } else {
            btnRef.current.style.display = "none";
        }
    }

    return (
        <button className='upBtn' title="Go to top" onClick={topFunction} ref={btnRef}>
            <FaArrowAltCircleUp className='icon' />
        </button>
    );
}

export default React.memo(TopButton);
