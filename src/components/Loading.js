import React from 'react'
import './Loading.css'

function Loading() {
    return (
        <div className="ring">
            <span></span>
        </div>
    );
}

export default React.memo(Loading);
