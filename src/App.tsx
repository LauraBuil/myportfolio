import ScrollToSection from './components/ScrollToSection'
import { Outlet } from 'react-router-dom'
import Header from './common/Header.tsx'
import Footer from './common/Footer.tsx'
import background from '/img/ball.webp'
import { Analytics } from "@vercel/analytics/react"

export default function App() {

    return (
        <>
                <ScrollToSection/>
                <Analytics />
                <div className='bg'>
                    <img src={background} alt="Image créée sur blender par Laura BUIL" className='bg__img'/>
                </div>
                <Header/>
                <Outlet/>
                <Footer/>
        </>
    )
}