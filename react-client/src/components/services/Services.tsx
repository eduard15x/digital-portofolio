import TitlePage from "../titlePage/TitlePage";
import DigitalStrategySVG from '../../assets/digitalStrategy.svg';
import WebDevelopmentSVG from '../../assets/webDevelopment.svg';
import SocialMediaSVG from '../../assets/socialMedia.svg';

export default function Services() {
    return (
        <div className="services" id="services">
            <TitlePage subtitle="What we do" title="Our Services" />
            <div className="services-list">
                <ServiceContainer
                    svg={DigitalStrategySVG}
                    serviceTitle="Digital Strategy"
                    serviceDescription="Lorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkd Lorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkdLorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkdLorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkd"
                />
                <ServiceContainer
                    svg={WebDevelopmentSVG}
                    serviceTitle="Web Development"
                    serviceDescription="Lorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkd Lorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkdLorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkd"
                />
                <ServiceContainer
                    svg={SocialMediaSVG}
                    serviceTitle="Social Media"
                    serviceDescription="Lorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkd Lorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkdLorem Ipsum adkafg afa sfsafd gf qdf q "
                />
                <ServiceContainer
                    svg={SocialMediaSVG}
                    serviceTitle="Social Media"
                    serviceDescription="Lorem Ipsum adkafgIpsum adkafg a I Ipsum adkafg a Ipsum adkafg a psum adkafg a afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkd Lorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkdLorem Ipsum adkafg afa sfsafd gf qdf q "
                />
                <ServiceContainer
                    svg={SocialMediaSVG}
                    serviceTitle="Social Media"
                    serviceDescription="Lorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkd Lorem Ipsum adkafg afa sfsafd gf qdf q fqg fjsdad akjsdnb asjkdLorem Ipsum adkafg afa sfsafd gf qdf q "
                />
            </div>
        </div>
    );
}


interface ServiceProps {
    svg: string;
    serviceTitle: string;
    serviceDescription: string;
}

export const ServiceContainer: React.FC<ServiceProps> = ({ svg, serviceTitle, serviceDescription }) => {
    return (
        <div className="services-list__container">
            <img className="service-logo" src={svg} alt="Service Logo" />
            <h2 className="service-title">{ serviceTitle }</h2>
            <p className="service-description">{ serviceDescription }</p>
        </div>
    );
};