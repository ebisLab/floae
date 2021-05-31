import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {Switch, Route, useLocation} from 'react-router-dom'
import Details from './pages/Details';
import Cart from './pages/Cart';
import { AnimatePresence, motion } from "framer-motion"

function App() {
  const location= useLocation();
  return (
    <div >
      <AnimatePresence
      //render 1 component at a timee
      exitBeforeEnter
      >
      <Switch location={location} key={location.pathname}>

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
        </AnimatePresence>


    </div>
  );
}

export default App;
