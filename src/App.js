import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Navbar'
import Pricing from './components/Pricing'
import Graph from './Graph'
import Donut from './Charts/Donut'
import Bar from './Charts/Bar'
import Line from './Charts/Line'
import Carousel from './Carousel'
//import FormExample from './Form'
//import About from './Components/pages/about';

//import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap'
//import {Navbar} from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbars/>
    <Graph/>
    <div className="section">
          <Donut />
        </div>
        <div className="section">
          <Bar />
        </div>
        <div className="section">
          <Line />
        </div>
        <Carousel/>
        
        <Pricing/>
        
    </div>
  );
}

export default App;
