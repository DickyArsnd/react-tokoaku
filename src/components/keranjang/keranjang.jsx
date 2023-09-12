import React from "react"
import { useState } from "react"
import './keranjang.css'

const Keranjang = () => {

    const [count, setCount] = useState(0); // contoh inisialisasi state dengan nilai awal 0

    return(
        <>

         <div className="kategori ml-[50px] mb-[20px] mt-[50px] bg-sky-400 w-[200px] rounded-lg h-[30px] text-center text-white">
             <h1 className='text-[21px]'>keranjang</h1>
        </div>
        <hr />
        <div className="bg-sky-400 w-[500px] h-[200px] ml-[60px] flex">
            <div className="cards flex" >
                    <img src="./assets/img/laptop.png" alt="banner" className="w-[225px] h-[225px] flex"/>
                <div className= "">                    
                    <p>infinix Smart 5</p>
                    <h1>HP</h1>
                    <p className="">10000</p>
                    <div className="flex">
                    <button onClick={() => setCount(count - 1)} className="flex">-</button> 
                 <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}>+</button> 
                    </div>
                    <button>Cancel</button>

                </div>
            </div>
        </div>
        </>
    )
}

export default Keranjang;