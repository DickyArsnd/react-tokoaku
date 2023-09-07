import Header from '../../layout/header';
// import Footer2 from '../../layout/footer2';
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card';


function Home() {
    return(
        <>
        <Header />
        <Banner />
        <hr />
        <Card />
        <hr className='bold-hr'/>
        {/* <Footer2 /> */}
        </>
    )
}

export default Home;