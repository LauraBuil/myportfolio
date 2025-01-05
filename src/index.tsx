import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/scss/main.scss'
import HomePage from './pages/HomePage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import ProjectYoulens from './pages/projects/ProjectYoulens.tsx'
// import ProjectGaecChimounet from './pages/projects/ProjectGaecChimounet.tsx'
// import ProjectHRNet from './pages/projects/ProjectHRNet.tsx'
import ProjectsList from './pages/projects/ProjectsList.tsx'

//mettre une roulette aléatoire pour changer le tracer souris

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: '/project/:projectIndex',
                element: <ProjectsList />,
            },

            // {
            //     path: '/projectYoulens',
            //     element: <ProjectYoulens />,
            // },
            // {
            //     path: '/projectGaecChimounet',
            //     element: <ProjectGaecChimounet />,
            // },
            // {
            //     path: '/projectHRNet',
            //     element: <ProjectHRNet />,
            // },
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
