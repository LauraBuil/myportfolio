import {Link, useLocation, useNavigate} from 'react-router-dom'
import logo from '../assets/img/logoblanc.svg'


export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()

    const handleNavigation = (anchor: string) => {
        if (location.pathname === '/') {
            // Si déjà sur la page d'accueil, scrolle directement
            const element = document.getElementById(anchor)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            // Sinon, navigue vers l'accueil avec l'ancre
            navigate(`/#${anchor}`)
        }
    }

    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true // Page d'accueil
        if (path !== '/' && location.pathname.includes(path)) return true // Autres pages avec ID
        return false
    }

    return (
        <div className='header'>
            <Link to='' className='header__logo'>
                <img src={logo} alt='Logo'/>
            </Link>
            <div className='nav'>
                <Link to='' className={`nav__link ${isActive('/') ? 'active' : ''}`}>accueil</Link>
                <p onClick={() => handleNavigation('projets')} className={`nav__link ${isActive('projets') ? 'active' : ''}`}>projets</p>
                <p onClick={() => handleNavigation('contact')} className={`nav__link ${isActive('contact') ? 'active' : ''}`}>contact</p>
            </div>
        </div>
    )
}