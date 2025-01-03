import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/scss/main.scss'
import HomePage from './pages/HomePage.tsx'
import ProjectYoulens from './pages/projects/ProjectYoulens.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: '/projectYoulens',
                element: <ProjectYoulens />,
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
