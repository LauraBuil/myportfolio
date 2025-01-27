
export default function Contact() {
    return (
        <>
            <section className='contact' id='contact'>
                <h1 className='contact__title'>Me contacter</h1>
                <a className='contact__text' href="mailto:buillaura0210@gmail.com">
                    E-mail: buillaura0210@gmail.com
                </a>
                {/*<a className='contact__text' href="tel:+33783053491">*/}
                {/*    Téléphone: 07 83 05 34 91*/}
                {/*</a>*/}
                <section className='me glassmorphism'>
                    <h1 className='me__title'>Qui suis-je?</h1>
                    <p className='me__text'>Je m'appelle Laura BUIL, j'ai 31 ans, développeuse front-end
                        passionnée ayant plus de deux ans d'expérience.
                        <br />
                        Avant de me lancer dans le développement, j'ai travaillé
                        pendant sept ans dans le secteur du commerce, notamment en tant
                        qu'adjointe de magasin chez Maxi Zoo.
                        <br />
                        Mon aventure dans le développement a commencé après la crise
                        de la COVID-19. Cherchant une nouvelle direction, je me suis
                        initialement orientée vers le WebDesign, pensant que coder toute
                        la journée ne serait pas pour moi. Cependant, au fil de ma formation,
                        j'ai découvert que le développement m'animait.
                        <br />
                        Créer à partir de rien, résoudre des bugs complexes, relever
                        des défis algorithmiques: ce sont des aspects du métier qui me
                        passionnent profondément.
                        <br />
                        Mon objectif est de rendre l'expérience utilisateur aussi fluide
                        et agréable que possible. J'aime concevoir des interfaces qui
                        suscitent une véritable interaction et qui incitent les utilisateurs
                        à revenir (peut-être un héritage de mes années dans le marketing).
                        <br />
                        En dehors de mon travail, je suis une passionnée de jeux vidéo
                        compétitifs sur PC, de golf depuis l'été 2024, et j'apprécie également
                        la photographie et les animaux.
                    </p>
                </section>
            </section>
        </>
    )
}