import React from 'react';

function FormPesanan() {
 
  return (
    <div className="w-9/12 ml-[10rem] p-6 shadow-lg mt-20" >
      <h1 className="text-2xl font-bold mb-4">Detail Pesanan</h1>
      <form>
        <div className="mb-4 w-5/6 shadow-md" >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Barang yang di pesan
          </label>
          <div>
          </div>
          <div>
            <label className="items-center">
              <span className="ml-2">Infinix Inbook X2 11th Gen I3 1115G4 8GB 256GB SSD 14.0FHD IPS 100SRGB</span>
            </label>
            <label className="items-center ml-[3.8rem]">
              <span className="ml-2">Rp5.598.000</span>
            </label>
          </div>
        </div>
          <label className='font-bold block text-gray-700 text-sm'>
            Opsi pengiriman
          </label>
          <label className=''>
            <span>Si Cepat</span>
          </label>
          <label className='items-center ml-[3.8rem] right-0'>
            <span>RP.10.000</span>
          </label>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pesanan:
          </label>
          <p className="text-xl text-blue-500"></p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Total Pesanan:
          </label>
          <p className="text-2xl text-blue-700 font-bold"></p>
        </div>
        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
          </label>
          <button className="text-2xl shadow-md w-5/6"> Buat Pesanan</button>
        </div>
      </form>
    </div>
  );
}

export default FormPesanan;
