import DetailsProjects from '../../components/DetailsProjects'

export default function ProjectHRNet() {
    return (
        <>
            <DetailsProjects ProjectName={'HR Net'}
                             ProjectDescription={'Projet de formation'}
                             ProjectDetails={'Ce projet consistait à créer une interface de création de fiches employés pour une entreprise. Grâce à celle-ci, les données entrées sont enregistrées dans la base de données. La seconde page \'Current Employees\' permet de visualiser les fiches employés dans une tableau. Dans ce tableau, il est possible de rechercher un employé en particulier, d\'afficher plus ou moins de résultats et de trier et filtrer par ordre alphabétique ou par date d\'entrée dans l\'entreprise. J\'ai migré cette app de jQuery vers ReactJS et TailwindCSS pour de meilleurs performances. J\'ai aussi créé un pluggin npm personnalisable (auto-close-modal) qui est une modal qui se ferme automatiquement après un certain temps et qui affiche le succès de création de la fiche employé.'}
                             ProjectImg={['src/assets/img/hrnet-create.webp', 'src/assets/img/hrnet-current.webp',]}
                             ProjectLink={'https://p14-hr-net-nu.vercel.app/'}/>
        </>
    )
}