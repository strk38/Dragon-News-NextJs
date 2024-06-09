'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '@/assets/logo.png'
import Image from 'next/image';

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';


import Link from 'next/link';
import Header from './Header';

const navItems = [
    {
        route: "Home",
        pathname: '/',
    },
    {
        route: "Pages",
        pathname: '/pages',
    },
    {
        route: "Category",
        pathname: '/categories/news?category=all-news',
    },
    {
        route: "News",
        pathname: '/news',
    },
    {
        route: "Posts",
        pathname: '/posts',
    },
    {
        route: "Contact",
        pathname: '/contact',
    },
];
// home pages category News Post Contact



function Navbar() {

    return (
        <>
            <Header></Header>
            <AppBar position="static" className='bg-black'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Image src={logo} width={150} height={100} alt='logo' />
                        <Box className='w-full text-center'>
                            {navItems.map((item) => (
                                <Link key={item} href={item.pathname}>
                                    <Button className='text-white'>{item.route}</Button>
                                </Link>
                            ))}
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={1} sx={{
                                "& svg": {
                                    color: 'white',
                                },
                            }}>
                                <IconButton >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton >
                                    <XIcon />
                                </IconButton>
                                <IconButton >
                                    <YouTubeIcon />
                                </IconButton>
                                <IconButton >
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton >
                                    <InstagramIcon />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Toolbar >
                </Container >
            </AppBar >
        </>
    );
}
export default Navbar;
