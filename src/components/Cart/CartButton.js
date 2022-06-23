import classes from './CartButton.module.css';
import { useDispatch ,useSelector} from 'react-redux';
import {cartActions} from '../../store/cart-slice';

const CartButton = (props) => {
  const badgeValue = useSelector((state)=> state.cartData.totalQuantity)
const dispatch = useDispatch();
  const cartHandler =()=>{
  dispatch(cartActions.toggle());
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeValue}</span>
    </button>
  );
};

export default CartButton;
