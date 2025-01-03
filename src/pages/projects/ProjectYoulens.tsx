import {ExternalLink} from '../../components/ExternalLinks'

export default function ProjectYoulens() {
    return (
        <>
            <section className='hero glassmorphism'>
                <h1 className='hero__title'>Youlens</h1>
                <h2 className='hero__work'>Vidéaste et photographe</h2>
                <p className='hero__text'>Ce projet consistait à créer l'application web responsive Youlens, vidéaste et
                    photographe spécialisé dans le mariage à partir de maquettes. Youlens est une application codée en
                    ReactJS qui regroupe une gallerie d'images, un slider ainsi qu'un formulaire de contact avec envoi
                    de mail automatique en back-end.</p>
                <div className='container'>
                    <img src='src/assets/img/youlens.webp' alt='Illustration de Youlens'
                         className='container__img'/>
                </div>
                <ExternalLink to='https://youlens.fr' className='hero__link'>
                    Visiter le site
                </ExternalLink>
            </section>
        </>
    )
}