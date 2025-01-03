import {Link} from 'react-router-dom'

interface ProjectsProps {
    ProjectName: string;
    ProjectDescription: string;
    ProjectDetails: string;
}

export default function Projects({ProjectName, ProjectDescription, ProjectDetails}: ProjectsProps) {
    return (
        <>
                <Link to={ProjectDetails} className='projects__card glassmorphism'>
                    <h2 className='projects__card__title'>Projet {ProjectName}</h2>
                    <p className='projects__card__text'>{ProjectDescription}</p>
                </Link>
        </>
    )
}