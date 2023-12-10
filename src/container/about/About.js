import Header from '../../components/header/Header';
import Banner from '../../components/banner/about/Banner';
import imageAbout from '../../assets/2.png';
import AboutCon from '../../components/banner/about/AboutCon';
import Footer from '../../components/footer/footer';

function About() {
  return (
    <>
      <Header />
      <Banner cName="banner-about" bannerImages={imageAbout} title="ABOUT" />
      <AboutCon />
      <Footer />
    </>
  );
}
export default About;
