import '../banner.scss';

function Contact(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt='Banner-Image' src={props.bannerImages} />
                <div className="banner-text">
                    <h1 className='banner-text-contact'>{props.title}</h1> {/*  Your Journey Your Story */}
                </div>
            </div>
        </>
    )
}
export default Contact;
