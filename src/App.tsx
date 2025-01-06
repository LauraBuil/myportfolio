import ScrollToSection from './components/ScrollToSection'
import { Outlet } from 'react-router-dom'
import Header from './common/Header.tsx'
import Footer from './common/Footer.tsx'
import background from '../public/img/ball.png'

export default function App() {

    return (
        <>
            <ScrollToSection/>
            <div className='bg'>
                <img src={background} alt="Background" className='bg__img'/>
            </div>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}