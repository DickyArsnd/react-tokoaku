import React from 'react'
import './header.css';
import { FaFacebook, FaInstagram, FaTwitterSquare, FaTelegram, FaGooglePlay, FaApple } from 'react-icons/fa';

function Footer2(params) {
    return (
     
        <>
            <footer className="px-20  pt-20 bg-[#E6F1FF] mt-10">
                <div className="container flex ">
                    <div className="w-full flex ">
                        <div className="w-1/2">
                            <h1 className="text-3xl font-kaushan text-primary font-semibold">Tokoku</h1>
                            <h3 className="text-sm mt-2">Tokoku 2023</h3>
                            <h3 className="text-sm ">All Right served</h3>
                        </div>
                        <div className="w-1/2">
                        <h2 className="text-md font-semibold ">Tautan</h2>
                            <h3 className="text-sm">About Me</h3>
                            <h3 className="text-sm">Help Center</h3>
                            <h3 className="text-sm">Service</h3>
                        </div>
                        <div className="w-1/2 ">
                            <h2 className="text-md font-semibold ">Social Media</h2>
                            <span className="flex gap-3  mt-2">
                            <FaFacebook size={25} />
                            <FaInstagram size={25} />
                            <FaTwitterSquare size={25} />
                            <FaTelegram size={25} />
                            </span>
                        </div>
                    </div>
                        <div className="w-1/2 text-center">
                            <span className="w-1/2">
                                <h1 className="text-xl font-semibold">Download Sekarang <span className='font-kaushan'>Tokoku</span></h1>
                            </span>
                            <span className="flex justify-around w-full gap-1 mt-4 font-semibold ">
                                <button className="border-black border-2 gap-3 py-2 rounded-md w-full flex items-center justify-center">
                                    <h1>Download di</h1><span><FaGooglePlay size={25} /></span>
                                </button>
                                  
                                <button className="border-black border-2 gap-3 py-2 rounded-md w-full flex items-center justify-center">
                                    <h1>Download di</h1><span><FaApple size={27} /></span>
                                </button>
                                
                            </span>
                        </div>
                </div>
                <p className="text-center mt-10 p-5 border-t-4">Copyright <span className="font-kaushan">Tokoku</span> @2023</p>
            </footer>
        </>
     
    )
}

export default Footer2;
