import Header from "../../components/header/Header";
import Banner from "../../components/banner/about/Banner";
import imageContact from "../../assets/5.png";
import Footer from "../../components/footer/footer";

function Contact() {
  return (
    <>
      <Header />
      <Banner
        cName='banner-about'
        bannerImages={imageContact}
        title=' CONTACT'
      />
      <Footer/>
    </>
  )
}
export default Contact;
