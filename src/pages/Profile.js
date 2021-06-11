import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Content from 'components/profile/Content';

export default function Profile() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Content />
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
