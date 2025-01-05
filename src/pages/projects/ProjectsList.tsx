import { useParams } from 'react-router-dom'
import DetailsProjects from '../../components/DetailsProjects'
import projectData from '../../data/projects.json'

export default function ProjectsList() {
    const { projectIndex } = useParams<{ projectIndex: string }>()
    const project = projectData[parseInt(projectIndex, 10)]

    if (!project) {
        return <div> Aucun projet trouvé </div>
    }

    return (
            <DetailsProjects
                ProjectName={project.name}
                ProjectDescription={project.description}
                ProjectDetails={project.details}
                ProjectImg={project.img}
                ProjectLink={project.link}
            />
    )
}
