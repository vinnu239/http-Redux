import ProductItem from './ProductItem';
import classes from './Products.module.css';
import * as data from '../../Movies.json';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';


const MoviesList= data.moviesList;


const Movies = (props) => {

  const dispatch=useDispatch();
  const movieHandler=()=>{
    dispatch(cartActions.movieToggle());
  }
  return (
    <section className={classes.products}>
      <h2>Buy your favorite Movies</h2>
      <button onClick={movieHandler}>close</button>
      <ul>
        {MoviesList.map((item)=>(
          <ProductItem
          key={item.id}
          id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
      />
        )
        
        )}
        
      </ul>
    </section>
  );
};

export default Movies;
