import React from 'react';

function OrderDetailForm() {
 
  return (
    <div className="w-5/12 ml-[10rem] p-6 shadow-md" >
      <h1 className="text-2xl font-bold mb-4">Detail Pesanan</h1>
      <form>
        <div className="mb-4 w-5/6 shadow-md" >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pilih Opsi Pengiriman:
          </label>
          <div>
            <label className="items-center">
              <input
                type="radio"
                className="form-radio text-blue-500"
                value="jne"
              />
              <span className="ml-2">JNE </span>
            </label>
            <label className="items-center ml-[5.5rem]">
              <span className="ml-2">RP.10.000</span>
            </label>
          </div>
          <div>
            <label className="items-center">
              <input
                type="radio"
                className="form-radio text-blue-500"
                value="Ninja Express"
              />
              <span className="ml-2">Ninja express</span>
            </label>
            <label className="items-center ml-6">
              <span className="ml-2">RP.11.000</span>
            </label>
          </div>
          <div>
            <label className="items-center">
              <input
                type="radio"
                className="form-radio text-blue-500"
                value="si cepat"
              />
              <span className="ml-2">si Cepat</span>
            </label>
            <label className="items-center ml-[3.8rem]">
              <span className="ml-2">RP.9.000</span>
            </label>
          </div>
        </div>
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
          <button className="text-2xl shadow-md w-5/6"><a href="/pesanan">Buat Pesanan</a></button>
        </div>
      </form>
    </div>
  );
}

export default OrderDetailForm;
