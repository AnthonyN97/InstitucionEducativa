import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AñoLectivo from './pages/AñoLectivo/AñoLectivo';
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
    <>
        <Header />
        <RouterProvider router={router} />
        <Footer />
    </>
  );
}

export default App;
