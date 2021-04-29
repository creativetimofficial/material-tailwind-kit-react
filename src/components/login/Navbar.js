import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavItem from '@material-tailwind/react/NavItem';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';

export default function LoginNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>
                        <a
                            href="https://material-tailwind.com?ref=mtk"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Material Tailwind
                        </a>
                    </NavbarBrand>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <NavItem
                            href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                            target="_blank"
                            rel="noreferrer"
                            ripple="light"
                        >
                            <Icon name="description" size="2xl" />
                            &nbsp;Docs
                        </NavItem>
                        <NavItem
                            href="https://material-tailwind.com/components?ref=mtk"
                            target="_blank"
                            rel="noreferrer"
                            ripple="light"
                        >
                            <Icon name="apps" size="2xl" />
                            &nbsp;Components
                        </NavItem>
                        <Dropdown
                            color="transparent"
                            size="sm"
                            buttonType="link"
                            buttonText={
                                <>
                                    <Icon
                                        name="view_carousel"
                                        size="2xl"
                                        color="white"
                                    />
                                    &nbsp;Templates
                                </>
                            }
                            ripple="light"
                            style={{
                                fontWeight: 500,
                                color: '#fff',
                                padding: '1rem 1.25rem',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Link to="/landing">
                                <DropdownItem color="lightBlue">
                                    Landing
                                </DropdownItem>
                            </Link>
                            <Link to="/profile">
                                <DropdownItem color="lightBlue">
                                    Profile
                                </DropdownItem>
                            </Link>
                            <Link to="/login">
                                <DropdownItem color="lightBlue">
                                    Login
                                </DropdownItem>
                            </Link>
                            <Link to="/register">
                                <DropdownItem color="lightBlue">
                                    Register
                                </DropdownItem>
                            </Link>
                        </Dropdown>
                        <NavItem
                            href="https://github.com/creativetimofficial/material-tailwind?ref=mtk"
                            target="_blank"
                            rel="noreferrer"
                            ripple="light"
                        >
                            <Icon
                                family="font-awesome"
                                name="fab fa-github"
                                size="xl"
                            />
                            &nbsp;Github
                        </NavItem>
                        <NavItem
                            href="https://github.com/creativetimofficial/material-tailwind/issues?ref=mtk"
                            target="_blank"
                            rel="noreferrer"
                            ripple="light"
                        >
                            Issues
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
