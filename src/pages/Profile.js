import React from 'react';
import Navbar from '../components/profile/Navbar';
import Footer from '../components/profile/Footer';
import Header from '../components/profile/Header';
import Content from '../components/profile/Content';

export default function Profile() {
    return (
        <>
            <Navbar />
            <main>
                <Header />
                <Content />
            </main>
            <Footer />
        </>
    );
}
