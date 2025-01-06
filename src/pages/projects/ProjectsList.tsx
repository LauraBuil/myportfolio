import { useParams, useNavigate } from 'react-router-dom'
import DetailsProjects from '../../components/DetailsProjects'
import projectData from '../../data/projects.json'

export default function ProjectsList() {
    const { projectIndex } = useParams<{ projectIndex?: string }>()
    const navigate = useNavigate()

    const index = projectIndex ? parseInt(projectIndex, 10) : NaN
    const project = !isNaN(index) ? projectData[index] : null

    if (!project) {
        // Rediriger vers la page d'accueil après 2 secondes
        setTimeout(() => navigate(''), 2000)
        return <div>Aucun projet trouvé. Redirection vers l'accueil...</div>
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
