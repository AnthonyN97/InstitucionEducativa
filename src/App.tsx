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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <>login</>,
  },
  {
    path: '/AñoLectivo',
    element: <AñoLectivo />,
  }
  ,
  {
    path: '/SobreNosotros',
    element: <AboutUs/>,
  }
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
