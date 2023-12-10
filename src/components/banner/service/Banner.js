import '../banner.scss';

function Banner(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt='Banner-Image' src={props.bannerImages} />
                <div className="banner-text">
                    <h1 className='banner-text-service'>{props.title}</h1> {/*  Your Journey Your Story */}
                </div>
            </div>
        </>
    )
}
export default Banner;
