'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, IconButton, Typography } from '@mui/material';
import Link from 'next/link';


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
        pathname: '/category',
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

const Footer = () => {
    return (
        <Box className="bg-black px-2 py-10">
            <Container>

                <Box className="w-full text-center" sx={{
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

                </Box>

                <Box className='w-full text-center'>
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className='text-white'>{item.route}</Button>
                        </Link>
                    ))}
                </Box>

                <Typography variant="body2" color="gray" textAlign="center">
                    Copyright @2024 The Dragon News.
                </Typography>
            </Container>

        </Box>
    );
};

export default Footer;