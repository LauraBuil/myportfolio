import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/scss/main.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectsList from './pages/projects/ProjectsList.tsx'
import HomePage from "./pages/HomePage.tsx";

//mettre une roulette aléatoire pour changer le tracer souris
// mettre la forme de Ney

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: '/project/:projectIndex',
                element: <ProjectsList />,
            },
            // {
            //     path: '*',
            //     element: <NotFound/>,
            // },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
