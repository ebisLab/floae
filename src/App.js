import './App.css';
import Main from './components/Main';
import {Switch, Route, useLocation} from 'react-router-dom'
import Details from './pages/Details';
import Cart from './pages/Cart';
import { AnimatePresence, motion } from "framer-motion"

function App() {
  const location= useLocation();

  const transition={duration: 0.5}
  return (
    <div >
      <AnimatePresence
      //render 1 component at a timee
      exitBeforeEnter
      >
        {/* <motion.nav
        transition={transition} 
        animate={{ marginTop:"5px", transition:{delay:4.0, duration:.9}}}
        style={{position: 'absolute', zIndex: 1000, marginTop:"-50px"}}>Menu menu menu menu</motion.nav> */}

               

      <Switch location={location} key={location.pathname}>
        
      {/* <motion.div 
        initial="initial"
        animate="animate"
        exit={{transition:{duration:1555}}}
        // exit={{opacity:0}}
        transition={transition}
        style={{zIndex:0}}
        >
            <div style={{position: "absolute"}}>Hey hey hey</div> */}
        <Route path="/details/">
        <Details/>
        </Route>

        <Route path="/cart/">
        <Cart/>
        </Route>

        <Route exact path="/">
        <Main/>
        </Route>

        {/* </motion.div> */}

        
        </Switch>
        </AnimatePresence>
        


    </div>
  );
}

export default App;
