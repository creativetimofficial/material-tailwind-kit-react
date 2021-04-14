import React from 'react';
import Page from '../components/login/Page';
import Navbar from '../components/login/Navbar';
import Container from '../components/login/Container';
import Footer from '../components/login/Footer';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Button from '@material-tailwind/react/Button';

export default function Login() {
    return (
        <Page>
            <Navbar />
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5>Login</H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-8 px-4">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="password"
                                iconName="lock"
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Get Started
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
            <Footer />
        </Page>
    );
}
