import DetailsProjects from '../../components/DetailsProjects'

export default function ProjectYoulens() {
    return (
        <>
            <DetailsProjects ProjectName={'Youlens'}
                             ProjectDescription={'Vidéaste et photographe'}
                             ProjectDetails={'Ce projet consistait à créer l\'application web responsive Youlens, vidéaste et photographe spécialisé dans le mariage à partir de maquettes. Youlens est une application codée en ReactJS qui regroupe une gallerie d\'images, un slider ainsi qu\'un formulaire de contact avec envoi de mail automatique en back-end.'}
                             ProjectImg={'src/assets/img/youlens.webp'}
                             ProjectLink={'https://youlens.fr'}/>
        </>
    )
}