import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import WorkingSection from 'components/landing/WorkingSection';
import TeamSection from 'components/landing/TeamSection';
import ContactSection from 'components/landing/ContactSection';

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

                <a
                    href="https://www.producthunt.com/posts/material-tailwind-kit-react?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-material-tailwind-kit-react"
                    target="_blank"
                    rel="noreferrer"
                    className="fixed bottom-5 left-5 z-50"
                >
                    <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=299547&theme=dark"
                        alt="Material Tailwind Kit React - Free Tailwind CSS & React UI Kit | Product Hunt"
                        className="w-[250px] h-[54px]"
                    />
                </a>
            </main>
            <DefaultFooter />
        </>
    );
}
