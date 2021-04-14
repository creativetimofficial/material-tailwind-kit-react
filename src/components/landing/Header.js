import React from 'react';
import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    const backgroundImage =
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div
                className="absolute top-0 w-full h-full"
                style={{
                    background: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Your story starts with us.</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                                This is a simple example of a Landing Page you
                                can build using Notus NextJS. It features
                                multiple CSS components based on the Tailwind
                                CSS design system.
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
