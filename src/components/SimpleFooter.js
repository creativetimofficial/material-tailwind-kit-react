export default function SimpleFooter() {
    return (
        <>
            <footer className="pt-8 pb-6">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4 md:justify-between">
                        <ul className="list-unstyled flex gap-8">
                            <li>
                                <a
                                    href="https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white font-medium block pb-2 text-sm"
                                >
                                    MIT License
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white font-medium block pb-2 text-sm"
                                >
                                    Contribute
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=mtk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white font-medium block pb-2 text-sm"
                                >
                                    Code of Conduct
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://creative-tim.com/contact-us?ref=mtk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white font-medium block pb-2 text-sm"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>

                        <div className="text-sm text-white font-medium">
                            Copyright © {new Date().getFullYear()} Material
                            Tailwind by{' '}
                            <a
                                href="https://www.creative-tim.com?ref=mtk"
                                className="text-white"
                            >
                                Creative Tim
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
