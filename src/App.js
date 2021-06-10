import './App.css';
import Main from './components/Main';
import {Switch, Route, useLocation} from 'react-router-dom'
import Details from './pages/Details';
import Cart from './pages/Cart';
import { AnimatePresence } from "framer-motion"
import mock from './mock.json'
import { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  const location= useLocation();
  const [store,setStore]=useState(mock)
  const [checkout, setCheckout]=useState([])
  const [isItTrans, setIsItTrans]=useState(false)

  const addItem=(item)=>{
    console.log("ietm", item)
    setCheckout([...checkout, item])
  }

  const removeItem=(item)=>{
    console.log("item", item)
    console.log("checkout", checkout)
    setCheckout(checkout.filter(movieitem=> item.id !== movieitem.id))
  }


  const transition={duration: 0.5}
  return (
    <ChakraProvider>
    <div >
      <AnimatePresence exitBeforeEnter>
               

      <Switch location={location} key={location.pathname}>
        
        <Route path="/details/:infoID">
        <Details store={store} checkout={checkout} addItem={addItem}/>
        </Route>

        <Route path="/cart/">
        <Cart checkout={checkout} removeItem={removeItem}/>
        </Route>

        <Route exact path="/">
        <Main store={store} checkout={checkout} addItem={addItem}/>
        </Route>


        
        </Switch>
        </AnimatePresence>
        


    </div>
     </ChakraProvider>
  );
}

export default App;
