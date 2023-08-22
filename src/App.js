import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import SearchBar from './components/UI/SearchBar.js';
import ProductView from './components/Shop/ProductView';
import Notification from './components/UI/Notification';
import{sendCartData,fetchCartData}from './store/cart-actions';

let isInitial = true;
function App() {
  const dispatch=useDispatch();
  const isVisible=useSelector(state =>state.cart.isVisible);
  const cart =useSelector(state => state.cartData);
  const notification = useSelector(state => state.cart.notification)
// it is used for fetching intial data
  useEffect(()=>{
   dispatch(fetchCartData())
  },[dispatch])
  // here use selector trigger whenever there is change in the store so cart is adding as dependency 
  //when cart changes use effect trigger and https request will send
  useEffect(()=>{
    // fetch('https://http-redux-72a53-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
    // {
      
    //   method:'PUT',
      
    //   body:JSON.stringify(cart)
    // }
    // )
    if(isInitial){
      isInitial=false;
      return;
    }
    // after calling this here it act as thunk like it dispatch the another function like reduxtool kit normally  
    //  returs the action object but it also return the functions not only return if it is a function rtk will execute the function 
    // so dipatch function inside will dispatch some actions and also put hhtp reuest
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
   

  },[cart,dispatch]);
  return (
    <>
    {notification && <Notification 
    status={notification.status} 
    title ={notification.title}
    message={notification.message}
    />}
     <Layout>
     <SearchBar/>
      {isVisible &&<Cart />}
      {/* <Products /> */}
      <ProductView/>
    </Layout>
    </>
   
  );
}

export default App;
