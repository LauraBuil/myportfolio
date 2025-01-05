import DetailsProjects from '../../components/DetailsProjects'

export default function ProjectGaecChimounet() {
    return (
        <>
            <DetailsProjects ProjectName={'Gaec Chimounet'}
                             ProjectDescription={'Projet Professionnel, Maraîcher Bio'}
                             ProjectDetails={'Ce projet consistait à créer l\'identité visuelle complète de la marque en passant par le logo, le site web responsive, les cartes de visite ainsi que les étiquettes de leurs produits transformés. Le site est statique en HTML, CSS pour le moment. Il comporte un formulaire d\'envoi de mail automatique en php ainsi qu\'une gallerie d\'images.'}
                             ProjectImg={['src/assets/img/gaecchimounet.webp']}
                             ProjectLink={'https://gaechimounet.fr'}/>
        </>
    )
}