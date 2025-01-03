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

    return (
        <div className='header'>
            <Link to='' className='header__logo'>
                <img src={logo} alt='Logo'/>
            </Link>
            <div className='nav'>
                <Link to='' className='nav__link'>accueil</Link>
                <p onClick={() => handleNavigation('projets')} className='nav__link'>projets</p>
                <Link to='/contact' className='nav__link'>contact</Link>
            </div>
        </div>
    )
}