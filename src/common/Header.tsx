import {Link, useLocation, useNavigate} from 'react-router-dom'
import logo from '../assets/img/logoblanc.svg'
import {useState} from 'react'


export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

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
            <div>
                <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6 white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                    </svg>
                </button>
                <div className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                    <Link to='' className={`nav__link ${isActive('/') ? 'active' : ''}`}>accueil</Link>
                    <p onClick={() =>  {handleNavigation('projets'); setMenuOpen(false)}}
                       className={`nav__link ${isActive('projets') ? 'active' : ''}`}>projets</p>
                    <p onClick={() => {handleNavigation('contact'); setMenuOpen(false)}}
                       className={`nav__link ${isActive('contact') ? 'active' : ''}`}>contact</p>
                </div>
            </div>
        </div>
    )
}