import Navbar from '../../Components/Navbar'
import CardItem from '../../Components/CardItem'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import './Home.scss'

function Home() {
    return (
        <>
            <div className='home-container'>
                <Navbar />
                <div className='cards-container'>
                    <h2>Truy cập gần đây</h2>
                    <hr />
                    <div className='swiper-container'>
                        <Swiper
                            slidesPerView={3}
                            navigation={true}
                            modules={[Navigation]}
                            className='mySwiper'
                        >
                            <SwiperSlide><CardItem /></SwiperSlide>
                            <SwiperSlide><CardItem /></SwiperSlide>
                            <SwiperSlide><CardItem /></SwiperSlide>
                            <SwiperSlide><CardItem /></SwiperSlide>
                            <SwiperSlide><CardItem /></SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home