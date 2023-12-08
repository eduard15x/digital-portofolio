import CarouselBanner from "../components/carousel/CarouselBanner";
import { Contact } from "../components/contact/Contact";
import { CoverBG } from "../components/coverBG/CoverBG";
import { Footer } from "../components/footer/Footer";
import { Nav } from "../components/nav/Nav";
import { Projects } from "../components/projects/Projects";
import { Services } from "../components/services/Services";
import { Team } from "../components/team/Team";

export default function Home() {
    return (
        <div className="home" id="home">
            <CoverBG />

            <Nav />

            <div className="carousel">
                <CarouselBanner />
            </div>

            <Services />

            <Team />

            <Projects />

            <Contact />

            <Footer />
        </div>
    );
}