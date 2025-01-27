import Contact from '../components/Contact.tsx'
import MySkills from '../components/MySkills.tsx'
import Projects from '../components/Projects.tsx'

export default function HomePage() {
    return (
        <>
                    <section className='hero glassmorphism'>
                        <h1 className='hero__title'>Buil Laura</h1>
                        <h2 className='hero__work'>Développeuse Front-End</h2>
                        <p className='hero__text'>Passionnée et persévérante,<br/>
                            je conçois des applications web sur mesure,
                            où chaque détail compte pour offrir une expérience
                            unique et impactante. Bienveillante et à l'écoute,
                            je m'engage à transformer vos idées en projets réussis.
                        </p>
                    </section>
            <MySkills/>
            <Projects />
            <Contact/>
        </>
)
}