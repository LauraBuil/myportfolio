// import me from '../assets/img/me.png'
import Projects from '../components/Projects.tsx'

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
            <section className='projects' id='projets'>
                <Projects ProjectDetails={'/projectYoulens'} ProjectName={'Pro Youlens'} ProjectDescription={'Youlens est une application web créée pour un vidéaste et photographe spécialisé dans le mariage.'}/>
                <Projects ProjectDetails={'/projectGaecChimounet'} ProjectName={'Pro Gaec Chimounet'} ProjectDescription={'Gaec Chimounet est le site web d\'une entreprise de maraîchage bio.'}/>
                <Projects ProjectDetails={''} ProjectName={'Youlens'} ProjectDescription={'Youlens est une application web pour un vidéaste et photographe spécialisé dans le mariage.'}/>
            </section>
        </>
    )
}