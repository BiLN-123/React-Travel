import '../banner.scss';

function Banner(props) {
  return (
    <>
      <div className={props.cName}>
        <img  alt="Banner-Image" src={props.bannerImages} />
        <div className="banner-text">
          <h1>{props.title}</h1> {/*  Your Journey Your Story */}
          <p className="banner-text1">{props.text1}</p> {/* Choose Your Favourite Destination */}
          <p className="banner-text2">{props.text2}</p> {/* WONDERFUL */}
          <a href={props.url} className={props.btnClass}>
            {props.btnText} {/* Travel Plan */}
          </a>
        </div>
      </div>
    </>
  );
}
export default Banner;
