import skillsData from '../data/skills.json'
import { SkillCategory } from '../types/skills'

export default function MySkills() {
    const techGroups: { key: SkillCategory; title: string }[] = [
        { key: 'frontend', title: 'Frontend' },
        { key: 'backend', title: 'Backend' },
        { key: 'devops', title: 'DevOps' },
        { key: 'workflow_et_methodologie', title: 'Workflow & méthodologie' },
        { key: 'outils_et_design', title: 'Outils & design' },
        { key: 'marketing_et_visibilite', title: 'Visibilité' }
    ]

    const softSkillsGroup: { key: SkillCategory; title: string } =
        { key: 'qualites_humaines', title: 'Qualités humaines'};

    return (
        <section className='skills'>
            <div className="skills__header">
                <p className="skills__main-title">Mes compétences</p>
                <h2 className="skills__eyebrow">Technologies & savoir-être</h2>
            </div>
            <div className="skills__grid">
                <article className="skills__card">
                    <h3 className="skills__card-title">Compétences techniques</h3>

                    <div className="skills__groups">
                        {techGroups.map((group) => (
                            <div className="skills__group" key={group.key}>
                                <h4 className="skills__group-title">{group.title}</h4>

                                <ul className="skills__badges">
                                    {skillsData.skills[group.key].map((skill) => (
                                        <li className="skills__badge" key={skill}>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="skills__card">
                    <h3 className="skills__card-title">Compétences humaines</h3>

                    <div className="skills__groups">
                        <div className="skills__group">
                            <h4 className="skills__group-title">{softSkillsGroup.title}</h4>

                            <ul className="skills__badges">
                                {skillsData.skills[softSkillsGroup.key].map((skill) => (
                                    <li className="skills__badge skills__badge--soft" key={skill}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}