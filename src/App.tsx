import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <>login</>,
  },
  {
    path: '/test',
    element: <>test</>,
  }
])

function App() {
  return (
    <>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  );
}

export default App;
