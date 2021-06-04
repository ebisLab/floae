import './App.css';
import Main from './components/Main';
import {Switch, Route, useLocation} from 'react-router-dom'
import Details from './pages/Details';
import Cart from './pages/Cart';
import { AnimatePresence, motion } from "framer-motion"
import mock from './mock.json'
import { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  const location= useLocation();
  const [store,setStore]=useState(mock)
  const [checkout, setCheckout]=useState([])

  const addItem=(item)=>{
    console.log("ietm", item)
    setCheckout([...checkout, item])
  }

  const removeItem=(item)=>{
    setCheckout(checkout.filter(movieitem=> item.imdbID !== movieitem.imdbID))
  }


  const transition={duration: 0.5}
  return (
    <ChakraProvider>
    <div >
      <AnimatePresence
      //render 1 component at a timee
      exitBeforeEnter
      >
               

      <Switch location={location} key={location.pathname}>
        
        <Route path="/details/">
        <Details store={store} checkout={checkout} addItem={addItem}/>
        </Route>

        <Route path="/cart/">
        <Cart/>
        </Route>

        <Route exact path="/">
        <Main store={store} checkout={checkout} addItem={addItem}/>
        </Route>

        {/* </motion.div> */}

        
        </Switch>
        </AnimatePresence>
        


    </div>
     </ChakraProvider>
  );
}

export default App;
