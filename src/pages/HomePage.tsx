// import me from '../assets/img/me.png'
// import Projects from '../components/Projects.tsx'
import projectData from '../data/projects.json'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <section className='hero glassmorphism'>
                {/*<div className='hero__img'>*/}
                {/*    <img src={me} alt="Photo de Laura Buil" className='hero__img__photo'/>*/}
                {/*</div>*/}
                <h1 className='hero__title'>Buil Laura</h1>
                <h2 className='hero__work'>Développeuse Front-End</h2>
                <p className='hero__text'>Passionnée et persévérante,
                    je conçois des applications web sur mesure,
                    où chaque détail compte pour offrir une expérience
                    unique et impactante. Bienveillante et à l'écoute,
                    je m'engage à transformer vos idées en projets réussis.
                </p>
            </section>
            {/*<section className='projects' id='projets'>*/}
            {/*    <Projects ProjectDetails={'/projectYoulens'} ProjectName={'Youlens'} ProjectDescription={'Youlens est une application web créée pour un vidéaste et photographe spécialisé dans le mariage.'}/>*/}
            {/*    <Projects ProjectDetails={'/projectGaecChimounet'} ProjectName={'Gaec Chimounet'} ProjectDescription={'Gaec Chimounet est le site web d\'une entreprise de maraîchage bio.'}/>*/}
            {/*    <Projects ProjectDetails={'/projectHRNet'} ProjectName={'HR Net'} ProjectDescription={'Youlens est une application web pour un vidéaste et photographe spécialisé dans le mariage.'}/>*/}
            {/*</section>*/}
            <section className='projects' id='projets'>
                {projectData.map((project, index) => (
                    <div key={index} className='projects__card glassmorphism'>
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