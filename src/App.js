import './App.css';
import {useState, useEffect} from 'react'
import Main from './components/Main';
import {Switch, Route, useLocation} from 'react-router-dom'
import Details from './pages/Details';
import Cart from './pages/Cart';
import { AnimatePresence } from "framer-motion"
import mock from './mock.json'
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  const location= useLocation();
  const [store,setStore]=useState(mock)
  const [localCart, setLocalCart]=useState()
  const [checkout, setCheckout]=useState([])

  const addItem=(item)=>{
    const check_index = checkout.findIndex(i=>i.id === item.id)

    if(check_index !== -1){
      let newval=checkout.find(i=>i.id === item.id)
      // newval.push({quantity:item.quantity})
      // newval.quanitity+=item.quantity
      newval.quantity += item.quantity
    }else{
      console.log("This ID is NOT in the cart")
      setCheckout([...checkout, item])
    }
  
    // setCheckout([...checkout, item])
    // localStorage.setItem('cart-items', JSON.stringify([...checkout, item]))
  }

  const removeItem=(item)=>{
    console.log("item", item)
    console.log("checkout", checkout)
    setCheckout(checkout.filter(movieitem=> item.id !== movieitem.id))
  }

  useEffect(() => {
    if(localStorage.getItem('cart-items')){
      setLocalCart(JSON.parse(localStorage.getItem('cart-items')))
    }else{
       localStorage.setItem('cart-items',JSON.stringify([]))
       setLocalCart(JSON.parse(localStorage.getItem('cart-items')))

    }
},[])

console.log("local cart", localCart)

  const transition={duration: 0.5}
  return (
    <ChakraProvider>
    <div >
      <AnimatePresence exitBeforeEnter>
               

      <Switch location={location} key={location.pathname}>
        
        <Route path="/details/:infoID">
        <Details store={store} setStore={setStore} checkout={checkout} localCart={localCart} addItem={addItem}/>
        </Route>

        <Route path="/cart/">
        <Cart checkout={checkout} localCart={localCart} removeItem={removeItem}/>
        </Route>

        <Route exact path="/">
        <Main store={store.slice(0,3)} checkout={checkout} addItem={addItem} localCart={localCart}/>
        </Route>


        
        </Switch>
        </AnimatePresence>
        


    </div>
     </ChakraProvider>
  );
}

export default App;
