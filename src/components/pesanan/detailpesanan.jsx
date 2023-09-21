function CardPesanan() {
  return (
    <>
      <div className="w-full">
      <div className="border-y-2 m-4 py-5 px-48">
        <div className="bg-slate-100 p-9  rounded-lg">
          <h1 className="font-semibold">Produk</h1>
          <label className="flex items-center justify-between my-2">
            <span>
              <h4>Infinix Inbook</h4>
            </span>
            <p>2 X</p>
            <p>Rp 3.000.000</p>
          </label>
          <label className="flex items-center justify-between my-2">
            <span>
              <h4>Tablet Samsung</h4>
            </span>
            <p className="m-2 ml-0">1 X</p>
            <p>Rp 2.000.000</p>
          </label><hr />
          <label className="flex items-center justify-between my-2">
            <span>
              <b><span>JASA PENGIRIMAN</span></b><br /><br />
              <p className="mt-2">EXPRESS</p>
            </span>
            <p className="mt-14">Rp 25.000</p>
          </label><hr />
        </div>
        <div className="py-3 bg-slate-100 rounded-3xl  mt-4 p-4">
          <div className="flex items-center">
            <label htmlFor="pesan" className="block font-semibold mr-2">
            Total Pembayaran
            </label>
            <b><p className="ml-96">Rp. 5.025.000</p></b>
          </div>
        </div>
        <div className="py-3 bg-slate-100 rounded-3xl  mt-4 p-4">
          <div className="flex items-center">
            <b><button className="ml-96">Bayar</button></b>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default CardPesanan;
