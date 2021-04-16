import './App.css';
import { Route, Switch } from 'react-router-dom';
// Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Menus from './Components/Menus';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Navbar />
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/about' component={About} />
            <Route exact path='/menus' component={Menus} />
            <Route exact path='/contact' component={Contact} />     
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
