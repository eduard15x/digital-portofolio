import { FaPhone } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";


export const Contact = () => {
    return (
        <div className="contact" id="contact">

            <div className="contact__office">

                <div className="information">
                    <h2 className="information--title">Our Office</h2>
                    <p className="information--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque consequatur doloribus, ea blanditiis adipisci itaque totam atque enim ullam. Quos quam tenetur ratione magnam, in perspiciatis illo nam consequuntur voluptates!
                    </p>

                    <div className="information__details">
                        <div>
                            <span className="info-icon"><FaPhone /></span>
                            <a href="tel:+40743224090">+40743224090</a>
                        </div>
                        <div>
                            <span className="info-icon"><MdOutlineMarkEmailUnread /></span>
                            <a href="mailto:precupeduard99@gmail.com">precupeduard99@gmail.com</a>
                        </div>
                        <div>
                            <span className="info-icon"><SlLocationPin /></span>
                            <a href="https://maps.app.goo.gl/5pQzgTY6T1Cdif279" target="_blank">RO, Sibiu, 22 Strada Toamnei</a>
                        </div>
                    </div>
                </div>

                <div className="program">
                    <h2 className="program--title">Opening Hours</h2>
                    <div className="program__schedule">
                        <div>
                            <p className="day">Monday-Friday</p>
                            <span className="space">-</span>
                            <p className="open-hours">08:00-15:00</p>
                        </div>
                        <div>
                            <p className="day">Saturday</p>
                            <span className="space">-</span>
                            <p className="open-hours">09:00-13:00</p>
                        </div>
                        <div>
                            <p className="day">Sunday</p>
                            <span className="space">-</span>
                            <p className="open-hours">Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />
        </div>
    );
}


export const ContactForm = () => {
    return (
        <form className="contact__form">
            <h2 className="contact__form--title">Get in touch</h2>

            <input
                required
                className="form-input"
                type="text"
                name="name"
                id="name"
                placeholder="Name*"
            />
            
            <div className="form-wrapper">
                <input
                    required
                    className="form-input input-email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address*"
                />

                <input
                    required
                    className="form-input input-tel"
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone*"
                />
            </div>

            <input
                required
                className="form-input"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject*"
            />

            <textarea
                required
                className="form-textarea"
                name="message"
                id="message"
                placeholder="How can we help you? Feel free to get in touch! *"
                cols={30}
                rows={30}
                maxLength={300}
            >
            </textarea>

            <button
                className="submit-btn"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}