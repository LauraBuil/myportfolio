import BouncingGolfBall from './BouncingGolfBall.tsx'
import golfBall from '../assets/img/golfBall.png'

export default function Contact() {
    return (
        <>
            <section className='contact' id='contact'>
                <h1 className='contact__title'>Me contacter</h1>
                <a className='contact__text' href="mailto:buillaura0210@gmail.com">
                    E-mail: buillaura0210@gmail.com
                </a>
                <a className='contact__link' href='https://www.linkedin.com/in/laura-buil-213655254/'>Mon LinkedIn</a>
                <a className='contact__link' href='https://github.com/LauraBuil'>Mon GitHub</a>
                {/*<a className='contact__text' href="tel:+33783053491">*/}
                {/*    Téléphone: 07 83 05 34 91*/}
                {/*</a>*/}
                <section className='me glassmorphism'>
                    <h1 className='me__title'>Qui suis-je?</h1>
                    <p className='me__text'>Je m'appelle Laura BUIL, j'ai 32 ans, développeuse fullstack
                        passionnée ayant plus de deux ans d'expérience.
                        <br/><br/>
                        Avant de me lancer dans le développement, j'ai travaillé
                        pendant sept ans dans le secteur du commerce, notamment en tant
                        qu'adjointe de magasin chez Maxi Zoo.
                        <br/><br/>
                        Mon aventure dans le développement a commencé après la crise
                        de la COVID-19. Cherchant une nouvelle direction, je me suis
                        initialement orientée vers le WebDesign, pensant que coder toute
                        la journée ne serait pas pour moi. Cependant, au fil de ma formation,
                        j'ai découvert que le développement m'animait.
                        <br/>
                        Appuyé par plus d’un an d’expérience en développement fullstack chez ODAPTOS et deux années de formations en Conception et Développement de logiciels et d'applications,
                        je dispose des compétences nécessaires pour accompagner l’évolution de tous les projets qui me seront confiés.
                        <br/><br/>
                        Créer à partir de rien, résoudre des bugs complexes, relever
                        des défis algorithmiques: ce sont des aspects du métier qui me
                        passionnent profondément.
                        <br/><br/>
                        Mon objectif est de rendre l'expérience utilisateur aussi fluide
                        et agréable que possible. J'aime concevoir des interfaces qui
                        suscitent une véritable interaction et qui incitent les utilisateurs
                        à revenir (peut-être un héritage de mes années dans le marketing) et
                        un backend optimisé afin de rendre l'expérience aussi fluide que possible.
                        <br/><br/>
                        En dehors de mon travail, je suis une passionnée de jeux vidéo
                        compétitifs sur PC, de golf depuis l'été 2024, et j'aime également
                        les animaux et la photographie.
                    </p>
                    <BouncingGolfBall golfBall={golfBall}/>
                </section>
            </section>
        </>
    )
}