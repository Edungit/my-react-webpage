import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './About';
import Notfound from './Notfound';
import Home from './Home';

function App() {
  return (
    <Switch>
      <Route path='/About' component= {About} />
      <Route path='/Notfound' component= {Notfound} />
      <Route exact path='/' component= {Home} />
      <Redirect to= '/Notfound' /> 
    </Switch>
  );
}

export default App;
