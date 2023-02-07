import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Programs from './Components/Programs';
import About from './Components/About';
import Contacts from './Components/Contacts';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/programs" element ={<Programs/>}/>
        <Route path="/contacts" element ={<Contacts/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
