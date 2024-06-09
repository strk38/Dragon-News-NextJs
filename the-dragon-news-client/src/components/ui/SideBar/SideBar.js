import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Divider, Grid } from '@mui/material';

import sideTopNews from '@/assets/side-top-news.png';
import sideBottomNews from '@/assets/side-bottom-img.png';
import blankImage from '@/assets/blankImage.png';

import Image from 'next/image';

import ButtonBase from '@mui/material/ButtonBase';


const SideBar = () => {
    return (
        <Box className='my-5'>
            <Card className='mb-2'>
                <CardActionArea>
                    <CardMedia>
                        <Image
                            src={sideTopNews}
                            width={800}
                            alt="top news"
                        />
                    </CardMedia>

                    <CardContent>
                        <p
                            className='
                            w-[100px]
                            px-2
                            my-3
                            rounded
                            bg-red-500 
                            text-white
                            '>Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoins Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className='my-2'>
                            By Peter Parker - Mar 18, 2024
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ....
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Divider className='my-2' />
            <Grid container spacing={2} className='my-2'>
                <Grid item>

                    <Image
                        src={blankImage}
                        width={120} height={90}
                        alt="top news"
                    />

                </Grid>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom className='text-sm font-semibold'>
                                Bitcoins Climbs as Elon Musk Says Tesla Likely to Accept it Again
                            </Typography>
                            <Typography gutterBottom className='text-sm mt-1'>
                                Mar 18, 2024
                            </Typography>
                            {/* <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography> */}

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            <Divider className='my-2' />
            <Grid container spacing={2} className='my-2'>
                <Grid item>

                    <Image
                        src={blankImage}
                        width={120} height={90}
                        alt="top news"
                    />

                </Grid>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom className='text-sm font-semibold'>
                                Bitcoins Climbs as Elon Musk Says Tesla Likely to Accept it Again
                            </Typography>
                            <Typography gutterBottom className='text-sm mt-1'>
                                Mar 18, 2024
                            </Typography>
                            {/* <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography> */}

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            <Divider className='my-2' />
            <Grid container spacing={2} className='my-2'>
                <Grid item>

                    <Image
                        src={blankImage}
                        width={120} height={90}
                        alt="top news"
                    />

                </Grid>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom className='text-sm font-semibold'>
                                Bitcoins Climbs as Elon Musk Says Tesla Likely to Accept it Again
                            </Typography>
                            <Typography gutterBottom className='text-sm mt-1'>
                                Mar 18, 2024
                            </Typography>
                            {/* <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography> */}

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            <Divider className='my-2' />
            <Grid container spacing={2} className='my-2'>
                <Grid item>

                    <Image
                        src={blankImage}
                        width={120} height={90}
                        alt="top news"
                    />

                </Grid>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom className='text-sm font-semibold'>
                                Bitcoins Climbs as Elon Musk Says Tesla Likely to Accept it Again
                            </Typography>
                            <Typography gutterBottom className='text-sm mt-1'>
                                Mar 18, 2024
                            </Typography>
                            {/* <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography> */}

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            <Divider className='my-2' />
            <Grid container spacing={2} className='my-2'>
                <Grid item>

                    <Image
                        src={blankImage}
                        width={120} height={90}
                        alt="top news"
                    />

                </Grid>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom className='text-sm font-semibold'>
                                Bitcoins Climbs as Elon Musk Says Tesla Likely to Accept it Again
                            </Typography>
                            <Typography gutterBottom className='text-sm mt-1'>
                                Mar 18, 2024
                            </Typography>
                            {/* <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography> */}

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            <Image className='my-2'
                src={sideBottomNews}
                width={800}
                height={800}
                alt="bottom image"
            />

        </Box>
    );
};

export default SideBar;