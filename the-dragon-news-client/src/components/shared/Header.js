'use client';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import header_img from '@/assets/The Dragon News.png';
import { Typography } from '@mui/material';
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box className='w-full my-4'>
            <Container>
                <Image
                    src={header_img}
                    width={550} height={400}
                    alt='logo'
                    className='mx-auto'
                />
                <Typography
                    variant="body2"
                    color="gray"
                    textAlign="center"
                    className='my-2'
                >
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign="center">
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;