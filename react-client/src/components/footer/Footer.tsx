import { FaFacebook, FaInstagram} from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { SiSendinblue } from "react-icons/si";

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer__company">
                <h3 className="footer__company--title">Company Name</h3>
                <p className="footer__company--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla repellendus magni quae vitae mollitia nesciunt.</p>
                <div className="social-media">
                    <div className="icon"><FaFacebook /></div>
                    <div className="icon"><FaFacebookMessenger /></div>
                    <div className="icon"><FaInstagram /></div>
                </div>
            </div>

            <div className="footer__about">
                <h3 className="footer__about--title">Usefull Links</h3>
                <ul className="link-list">
                    <a className="link" href="xaxa">Enjoy</a>
                    <a className="link" href="xaxa">This</a>
                    <a className="link" href="xaxa">Tutorial</a>
                </ul>
            </div>

            <div className="footer__contact">
                <h3 className="footer__contact--title">Contact info</h3>
                <p className="footer__contact--address">My Address Location</p>
                <p className="footer__contact--phone">Contact info</p>
                <p className="footer__contact--email">My Email Address</p>
            </div>

            <div className="footer__subscribe">
                <h3 className="footer__subscribe--title">Subscribe</h3>
                <p className="footer__subscribe--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla repellendus magni quae vitae mollitia nesciunt.</p>

                <div className="subscribe-form">
                    <input className="subscribe-input" type="text" placeholder="Your email" />
                    <button className="subscribe-btn"><SiSendinblue /></button>
                </div>
            </div>
        </div>
    );
}