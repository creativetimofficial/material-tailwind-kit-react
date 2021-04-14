import React from 'react';
import BackgroundImage from '../../img/background-1920x1080.jpg';

export default function Header() {
    return (
        <section className="relative block" style={{ height: '500px' }}>
            <div
                className="absolute top-0 w-full h-full"
                style={{
                    background: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(${BackgroundImage})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                }}
            />
        </section>
    );
}
