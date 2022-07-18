import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import './CardItem.scss'

function CardItem() {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    image={require('./default-pfp.png')}
                    alt='profile picture'
                />
                <CardContent>
                    <Typography variant='body2' color='#9e9d8a'>
                        <span className='name'>Nguyễn Đức Hiệp</span>
                        <br />
                        Truy cập 10 phút trước
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardItem