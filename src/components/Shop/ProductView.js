import React from "react";
import classes from "./ProductView.module.css";
import Products from "./Products";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Movies from "./Movies";
const ProductView = () => {
  const isVisible = useSelector((state) => state.cart.bookVisible);
  const movieVisible = useSelector((state) => state.cart.movieVisible);
  const dispatch = useDispatch();
  const bookHandler = () => {
    dispatch(cartActions.bookToggle());
  };
  const movieHandler = () => {
    dispatch(cartActions.movieToggle());
  };
  return (
    <>
      <section className={classes.products}>
        {!movieVisible && (
          <button onClick={bookHandler}>
            <h2>Books</h2>
          </button>
        )}
        {isVisible && <Products />}
        {!isVisible && (
          <button onClick={movieHandler}>
            <h2>Movies</h2>
          </button>
        )}
        {movieVisible && <Movies />}
      </section>
    </>
  );
};
export default ProductView;
