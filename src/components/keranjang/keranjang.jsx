import React from "react"
import { useState } from "react"
import './keranjang.css'

const Keranjang = () => {

    const [count, setCount] = useState(0); // contoh inisialisasi state dengan nilai awal 0

    return(
        <>
      
        <div className="w-1/3 p-2 ml-[60px] flex shadow-lg">
            <div className="cards flex border-2 p-5" >
                    <img src="./assets/img/laptop.png" alt="banner" className="w-[225px] h-[225px] flex "/>
                <div className= "ml-8 mt-9 p-[10px]">                    
                    <b><p>infinix Smart 5</p></b>
                    <h1>HP</h1>
                    <p className="">10000</p>
                    <div className="flex">
                    <button onClick={() => setCount(count - 1)} className="flex">-</button> 
                 <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}>+</button> 
                    </div>
                    <button className="mt-[30px] bg-[#E6F1FF] w-[130px]">Cancel</button>

                </div>
            </div>
        </div>
        </>
    )
}

export default Keranjang;