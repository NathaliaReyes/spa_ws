import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Packages from './pages/Packages.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';
// import './styles/Footer.css';
// import './styles/Header.css';
import './styles/NavTabs.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Services',
        element: <Services />
      },
      {
        path: '/Packages',
        element: <Packages />
      },
      {
        path: '/Contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
