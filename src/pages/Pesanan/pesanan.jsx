import Header from "../../layout/header";
import Footer2 from "../../layout/footer2";
import FormPesanan from "../../components/pesanan/detailpesanan";
// import Pesanan from "../../components/formPesanan/pesanan";

function Pesanan() {
    return (
        <>
        <Header />
        <div className="kategori ml-[50px] mb-[20px] mt-[50px] bg-sky-400 w-[200px] rounded-lg h-[30px] text-center text-white">
             <h1 className='text-[21px]'>Pesanan Anda</h1>
        </div>
        <FormPesanan />
        <Footer2/>
        </>
    )
}

export default Pesanan;