import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AñoLectivo from './pages/AñoLectivo/AñoLectivo';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from 'primereact/api';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './pages/AboutUs/AboutUs';
import Contactanos from './pages/Contactanos/Contactanos';
import Normas from './pages/Normas/Normas';
import Niveles from './pages/Niveles/Niveles';
import AreaDeportes from './pages/AreaDeportes/AreaDeportes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Test',
    element: <AñoLectivo />,
  },
  {
    path: '/Niveles',
    element: <Niveles />,
  },
  {
    path: '/Normas',
    element: <Normas />,
  }
  ,
  {
    path: '/SobreNosotros',
    element: <AboutUs/>,
  },
  {
    path: '/Contactanos',
    element: <Contactanos/>,
  },
  {
    path: '/AcademiaDeportiva',
    element: <AreaDeportes />,
  },
])

function App() {
  return (
    <PrimeReactProvider>
        <Header />
        <RouterProvider router={router} />
        <Footer />
    </PrimeReactProvider>
  );
}

export default App;
