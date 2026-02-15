import  Navbar from './components/Navbar'
import { Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';

function App() {
 
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/user/:id" element={<Users />} />
    </Routes>
    </>
  );
}

export default App
