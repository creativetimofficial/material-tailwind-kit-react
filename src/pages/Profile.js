import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/Profile/Header';
import Content from 'components/Profile/Content';

export default function Profile() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Content />
            </main>
            <DefaultFooter />
        </>
    );
}
