import './App.css';
import Navbar from './Navbar';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './About';
import Notfound from './Notfound';

function App() {
  return (
    <Switch>
      <Route path='/About' component= {About} />
      <Route path='/Notfound' component= {Notfound} />
      <Route exact path='/' component= {Navbar} />
      <Redirect to= '/Notfound' /> 
    </Switch>
  );
}

export default App;
