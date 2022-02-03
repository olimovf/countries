import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import './Header.css';

function Header() {
    const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'dark');

    useEffect(() => {
        if(mode === 'dark') {
            document.body.classList.remove('light-theme');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.add('light-theme');
            localStorage.setItem('mode', 'light');
        }
    }, [mode]);

    return (
        <header className='header'>
            <div className="container">
                <h2 className='header__title'>Where in the world?</h2>
                <div className="header__mode" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                    {mode === 'dark' ? <FiSun className='header__mode-icon' /> : <FiMoon className='header__mode-icon' />} 
                    <span className="header__mode-text">{mode === 'dark' ? 'Light' : 'Dark'} mode</span>
                </div>
            </div>
        </header>
    );
}

export default React.memo(Header);
