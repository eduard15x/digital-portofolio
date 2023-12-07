import { useState } from "react";
import TitlePage from "../titlePage/TitlePage";

export const Team = () => {
    return (
        <div className="team" id="team">
            <TitlePage subtitle="who we are" title="Meet Team" />

            <div className="team__list">
                <PersonContainer
                    personImg="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    personName="Stephan McQueen"
                    personRole="CEO"
                />
                <PersonContainer
                    personImg="https://images.unsplash.com/photo-1616065297556-f05bc00c9a3e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    personName="Marilu Dobrescu"
                    personRole="Co-Founder"
                />
                <PersonContainer
                    personImg="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    personName="George Conian"
                    personRole="Executive"
                />
            </div>
        </div>
    );
}

interface PersonProps {
    personImg: string;
    personName: string;
    personRole: string;
}

export const PersonContainer: React.FC<PersonProps> = ({ personImg, personName, personRole }) => {
    const [mouseOn, setMouseOn] = useState<boolean>(false);

    return (
        <div className="person">
            <img className={`person__img ${mouseOn ? '': 'hovering'}`} src={personImg} alt={personName + " profile picture."} onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}/>

            <div className={`person__info ${mouseOn ? '': 'hovering'}`} onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
                <p className="person__info--name">{ personName }</p>
                <p className="person__info--role">{ personRole }</p>
            </div>
        </div>
    );
}