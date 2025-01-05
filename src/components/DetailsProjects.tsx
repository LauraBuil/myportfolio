import {ExternalLink} from './ExternalLinks'

type DetailsProjectsProps = {
    ProjectName: string;
    ProjectDescription: string;
    ProjectDetails: string;
    ProjectImg: Array<string>;
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
                    {Array.isArray(ProjectImg) ? (
                        ProjectImg.map((img, index) => (
                            <img key={index} src={img} className='container__img' alt={`Capture d\`écran de ${index + 1}`} />
                        ))
                    ) : (
                        <img src={ProjectImg} className='container__img' alt={'Capture d`écran de '+ProjectName} />
                    )}
                </div>
                <ExternalLink to={ProjectLink} className='hero__link'>
                    Visiter le site
                </ExternalLink><br/>
                <a href='https://www.npmjs.com/package/react-auto-close-modal' target='_blank' className='hero__link'>Voir le plug-in npm</a>
            </section>
        </>
    )
}