interface TitlePageProps {
    subtitle: string;
    title: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ subtitle, title }) => {
    return (
        <div className="title-comp">
            <p className="title-comp__subtitle">{subtitle}</p>
            <p className="title-comp__title">{title}</p>
            <hr className="title-comp__border" />
        </div>
    );
}

export default TitlePage;