import './App.css';
import { Route, Switch } from 'react-router-dom';
// Components
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      Something
      <Navbar />
      <Switch>
          <Route path='/' component={Home} />      
      </Switch>
    </div>
  );
}

export default App;
