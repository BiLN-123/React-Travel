import Header from "../../components/header/Header";
import Banner from "../../components/banner/home/Banner";
import Anh1 from '../../assets/1.gif'
import Destination from "../../components/banner/home/Destination";
import Trip from "../../components/banner/home/Trip";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <>
        <Header/>
        <Banner
            cName='banner'
            bannerImages={Anh1}
            title='Your Journey Your Story'
            text1='Choose Your Favourite Destination'
            text2='WONDERFUL'
            url='/'
            btnClass='buttonBanner'
            btnText='Travel Plan'
        />
        <Destination/>
        <Trip/>
        <Footer/>
    </>
  )
}
export default Home;
