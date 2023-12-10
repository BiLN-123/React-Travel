import Header from "../../components/header/Header";
import Banner from "../../components/banner/service/Banner";
import imageService from "../../assets/9.png";
import Footer from "../../components/footer/footer";
import Trip from "../../components/banner/home/Trip";

function Service() {
  return (
    <>
      <Header />
      <Banner
        cName='banner-about'
        bannerImages={imageService}
        title=' SERVICE'
      />
      <Trip/>
      <Footer/>
    </>
  )
}
export default Service;
