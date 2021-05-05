import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components//DefaultFooter';
import Header from 'components/Landing/Header';
import WorkingSection from 'components/Landing/WorkingSection';
import TeamSection from 'components/Landing/TeamSection';
import ContactSection from 'components/Landing/ContactSection';

export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <WorkingSection />
                <TeamSection />
                <ContactSection />
            </main>
            <DefaultFooter />
        </>
    );
}
