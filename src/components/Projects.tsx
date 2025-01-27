import {Link} from 'react-router-dom'
import projectData from '../data/projects.json'
import iconBall from '../assets/img/iconball.svg'

export default function Projects() {
    return (
        <>
            <section className='projects' id='projets'>
                {projectData.map((project, index) => (
                    <div key={index} className='projects__card glassmorphism'>
                        <img src={iconBall} alt='icone de balle de golf' className='iconBall'/>
                        <Link to={`/project/${index}`} className='projects__card__link'>
                            <h2 className='projects__card__link__title'>Projet {project.name}</h2>
                            <p className='projects__card__link__text'>{project.minidescription}</p>
                        </Link>
                    </div>
                ))}
            </section>
        </>
    )
}