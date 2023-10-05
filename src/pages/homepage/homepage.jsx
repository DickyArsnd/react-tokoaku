import Header from '../../layout/header';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card';
import Footer2 from '../../layout/footer2';
import Kategori from '../../components/kategori/kategori';
import 'swiper/css';
import 'swiper/css/navigation';
import './hompage.css'


function Home() {
    const [product, setProduct] = useState("");

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch
                ('./data/data.json');
                
                const data = await response.json();
                setProduct(data);

                //Menampilkan data ke console
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProductData();
    }, []);


    return(
        <>
        <Header />
        <Banner />
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={4}>
        <SwiperSlide><Kategori /></SwiperSlide>
        </Swiper>
        <hr /> <br />
        <div className="kategori ml-[50px] mb-[20px] bg-sky-400 w-[200px] rounded-lg h-[30px] text-center text-white">
            <h1 className='text-[21px]'>kategori</h1>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={4}>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        </Swiper>
        <br /> <br />
        <hr /> <br />
        <div className="kategori ml-[50px] mb-[20px] bg-sky-400 w-[200px] rounded-lg h-[30px] text-center text-white">
            <h1 className='text-[21px]'>kategori</h1>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={4}>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        </Swiper>
        <br /><br />
        <hr /> <br />
        <div className="kategori ml-[50px] mb-[20px] bg-sky-400 w-[200px] rounded-lg h-[30px] text-center text-white">
            <h1 className='text-[21px]'>kategori</h1>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={4}>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        </Swiper>
        <br /><br />
        <Footer2/>
        </>
    )
}

export default Home;