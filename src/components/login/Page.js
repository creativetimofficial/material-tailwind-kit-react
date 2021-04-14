import React from 'react';
import BackgroundImage from '../../img/background-1920x1280.jpg';

export default function Page({ children }) {
    return (
        <div
            className="w-screen h-screen relative flex flex-col justify-between"
            style={{
                background: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(${BackgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            {children}
        </div>
    );
}
