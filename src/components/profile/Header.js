import React from 'react';
import BackgroundImage from '../../img/background-1920x1080.jpg';

export default function Header() {
    return (
        <section className="relative block" style={{ height: '500px' }}>
            <div className="bg-profile-background bg-cover bg-center absolute top-0 w-full h-full" />
        </section>
    );
}
