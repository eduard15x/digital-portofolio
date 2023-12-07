import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitlePage from "../titlePage/TitlePage";
import { IoOpenOutline } from "react-icons/io5";
import { Project } from "../dashboard/Dashboard";

export const Projects = () => {
    const [projects, setProjects] = useState<Project[] | []>([]);

    const getAllProjects = async () => {
        try {
            const response  = await fetch('http://localhost:3000/project/list', {
                method: 'GET',
            })

            if (response.status >= 200 && response.status < 300) {
                const json = await response.json();
                setProjects(json);
            } else {
                setProjects([]);
                console.error(response);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllProjects();
    }, [])

    return (
        <div className="projects" id="projects">


            <TitlePage subtitle="check our work" title="Projects" />

            <div className="projects__list">

                {
                    projects.length > 0
                    ? projects
                        .sort((a, b) => a.projectPosition - b.projectPosition)
                        .map((proj) => (
                        <ProjectCard
                            key={proj.id}
                            image={proj.projectImageLink}
                            name={proj.projectName}
                            link={proj.projectLink}
                            description={proj.projectDescription}
                        />
                    ))
                    : <div></div>

                }

            </div>

        </div>
    );
}

interface ProjectCardProps {
    image: string;
    name: string;
    link: string;
    description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, link, description }) => {
    return (
        <div className="card card-trans">
            <div className="border">
                <h2>{ name }</h2>
                <img src={image} alt="Project Image" />
                <div className="info-description">
                    <Link to={link} className="link-icon">
                        <IoOpenOutline />
                    </Link>
                    <p>{ description }</p>
                </div>
            </div>
        </div>
    );
}