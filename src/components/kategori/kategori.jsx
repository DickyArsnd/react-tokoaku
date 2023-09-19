import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import stylesheet
import { Carousel } from 'react-responsive-carousel';

function Kategori() {
  return (
        <>
        <div className="card shadow-md border-2 border-black rounded-lg w-[290px] ml-[30px]" >
            <div className="image ">
                <img src="./assets/img/tablet.png" alt="" className='h-[200px]'/>
            </div>
            <div className="judul ml-[15px]">
                <h2 className='font-bold'>Product HP terbaru</h2>
            <div className="keterangan">
                <p className='w-[250px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum impedit temporibus veritatis quae aliquam vel cumque</p>
            </div>
            </div>
            <div className="harga flex justify-around space-x-14 mt-[20px] mb-[10px]" >
                <p className='tect-center'>RP.5000</p>
                <div className='button'>
                <button className='p-[1px] bg-sky-400 w-[50px] '>beli</button>
                </div>
            </div>
        </div>
        </>
  )};
export default Kategori;