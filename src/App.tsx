import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AñoLectivo from './pages/AñoLectivo/AñoLectivo';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    path: '/test',
    element: <>test</>,
  }
])

function App() {
  return (
    <>
        <Header />
        <RouterProvider router={router}></RouterProvider>
        <Footer />
    </>
  );
}

export default App;
