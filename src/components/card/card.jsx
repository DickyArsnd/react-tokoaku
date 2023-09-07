import React from 'react'
import './card.css'

const Card = () => {
    return(
        <>
        <div className="kategori ml-[100px] mb-[20px] bg-sky-400 w-[200px] rounded-lg h-[30px] text-center text-white">
            <h1 className='text-[21px]'>kategori</h1>
        </div>
        <div className="card border-2 border-black rounded-lg w-[330px] ml-[100px]" >
            <div className="image ">
                <img src="./assets/img/float.png" alt="" className='h-[250px]'/>
            </div>
            <div className="judul ml-[15px]">
                <h1 className='font-bold'>Product HP terbaru</h1>
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
    )
}

export default Card;