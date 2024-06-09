
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';

import topNews from '@/assets/top-news.png';
import topNews2 from '@/assets/top-news2.png';
import Image from 'next/image';
import { getAllNews } from '@/utils/getAllNews';


const LatestNews = async () => {
    const { data } = await getAllNews();
    return (
        <>
            <Box className='my-5'>
                <Card >
                    <CardActionArea>
                        <CardMedia>
                            <Image
                                src={data[0].thumbnail_url}
                                width={800}
                                height={500}
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
                            '>{data[0].category}</p>
                            <Typography gutterBottom variant="h5" component="div">
                                {data[0].title}
                            </Typography>
                            <Typography gutterBottom className='my-2'>
                                By {data[0].author.name} - {data[0].author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data[0].details.length > 200 ? data[0].details.slice(0, 200) + '...' : data[0].details}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        data.slice(1, 5).map(news => (
                            <Grid key={news.id} item xs={6}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia sx={{
                                            "& img": {
                                                width: "100%",
                                                height: "250px",
                                            }
                                        }}>
                                            <Image
                                                src={news.thumbnail_url}
                                                width={800}
                                                height={400}
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
            '>{news.category}</p>
                                            <Typography gutterBottom >
                                                {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                                            </Typography>
                                            <Typography gutterBottom className='my-2'>
                                                By {news.author.name} - {news.author.published_date}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {news.details.length > 200 ? news.details.slice(0, 200) + '...' : news.details}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    }


                </Grid>
            </Box>
        </>
    );
};

export default LatestNews;