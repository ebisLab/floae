import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {Switch, Route} from 'react-router-dom'
import Details from './pages/Details';
import Cart from './pages/Cart';

function App() {
  return (
    <div >
      <Switch>

        <Route path="/details/">
        <Details/>
        </Route>

        <Route path="/cart/">
        <Cart/>
        </Route>

        <Route exact path="/">
        <Main/>
        </Route>
        
        </Switch>


    </div>
  );
}

export default App;
