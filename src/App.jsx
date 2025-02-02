import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/UI/Footer';
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
