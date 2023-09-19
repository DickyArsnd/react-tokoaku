import React from 'react';
import { FaMobile, FaLaptop, FaTshirt } from 'react-icons/fa';
import { GiSonicShoes,GiTrousers } from 'react-icons/gi';

function Kategori() {
  return (
    <div className="w-[20rem] h-[200px] flex justify-center items-center  place-content-center ml-[32rem] mb-10">
      <div className="mx-4 p-4 bg-sky-300 rounded-lg">
        <FaMobile size={70} />
        <p className="text-center">Handphone</p>
      </div>
      <div className="mx-4 p-4 bg-sky-300 rounded-lg">
        <FaLaptop size={70} />
        <p className="text-center">Laptop</p>
      </div>
      <div className="mx-4 p-4 bg-sky-300 rounded-lg">
        <GiSonicShoes size={70} />
        <p className="text-center">Sepatu</p>
      </div>
      <div className="mx-4 p-4 bg-sky-300 rounded-lg">
        <GiTrousers size={70} />
        <p className="text-center">Celana</p>
      </div>
      <div className="mx-4 p-4 bg-sky-300 rounded-lg">
        <FaTshirt size={70} />
        <p className="text-center">Pakaian</p>
      </div>
      {/* Tambahkan elemen lainnya di sini */}
    </div>
  );
}

export default Kategori;
