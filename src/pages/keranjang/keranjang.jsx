import Header from "../../layout/header";
import Footer2 from "../../layout/footer2";
import Keranjang from "../../components/keranjang/keranjang";
import Pesanan from "../../components/formPesanan/pesanan"

function Checkout() {
    return(
        <>
        <Header />
        <div className="kategori ml-[50px] mb-[20px] mt-[50px] bg-sky-400 w-[200px] rounded-lg h-[30px] text-center text-white">
             <h1 className='text-[21px]'>keranjang</h1>
        </div>
        <div className="flex flex-wrap">
        <Keranjang />   
        <Pesanan />
        </div>
        <Keranjang />
        <Keranjang />
        <Keranjang />
        
        <Footer2 />
        </>
    )
}

export default Checkout;