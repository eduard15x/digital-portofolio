import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselBanner() {
    return (
        <Carousel
            showArrows={true}
            showStatus={false}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            stopOnHover={false}
            interval={6000}
            transitionTime={700}
            swipeable={true}
            emulateTouch={true}
        >
            <Banner
                firstTitle="Grow"
                secondTitle="Business"
                description="The best way to predict your future is to create it"
                btnText="More details"
            />
            <Banner
                firstTitle="Hello"
                secondTitle="World"
                description="The secret of getting ahead is getting started"
                btnText="Contact us"
            />
            <Banner
                firstTitle="Hello"
                secondTitle="World"
                description="The secret of getting ahead is getting started"
                btnText="Contact us"
            />
        </Carousel>
    );
}

const Banner = ({ firstTitle = "xa", secondTitle = "xaxa", description = "aza", btnText = "qdqgq" }) => {
    return (
        <div className="banner">
            <p className="banner__firstTitle">
                { firstTitle }
            </p>
            <p className="banner__secondTitle">
                { secondTitle }
            </p>
            <p className="banner__description">
                { description }
            </p>
            <button className="banner__btn-redirect">
                { btnText }
            </button>
        </div>
    );
}