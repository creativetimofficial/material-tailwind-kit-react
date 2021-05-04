import React from 'react';
import Navbar from 'components/landing/Navbar';
import Footer from 'components/landing/Footer';
import Header from 'components/landing/Header';
import WorkingSection from 'components/landing/WorkingSection';
import TeamSection from 'components/landing/TeamSection';
import ContactSection from 'components/landing/ContactSection';

export default function Landing() {
    return (
        <>
            <Navbar />
            <main>
                <Header />
                <WorkingSection />
                <TeamSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
