import {ExternalLink} from './ExternalLinks'

type DetailsProjectsProps = {
    ProjectName: string;
    ProjectDescription: string;
    ProjectDetails: string;
    ProjectImg: string;
    ProjectLink: string;
}

export default function DetailsProjects({ProjectName, ProjectDescription, ProjectDetails, ProjectImg, ProjectLink}: DetailsProjectsProps) {
    return (
        <>
            <section className='hero glassmorphism'>
                <h1 className='hero__title projectTitle'>{ProjectName}</h1>
                <h2 className='hero__work'>{ProjectDescription}</h2>
                <p className='hero__text'>{ProjectDetails}</p>
                <div className='container'>
                    <img src={ProjectImg} alt={'Capture d`écran de '+ProjectName}
                         className='container__img'/>
                </div>
                <ExternalLink to={ProjectLink} className='hero__link'>
                    Visiter le site
                </ExternalLink>
            </section>
        </>
    )
}