import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DummyProducts =[{
  id:'p1',
  price:6,
  title:'My First Book',
  description:'My first Redux Project'
},
{
  id:'p2',
  price:8,
  title:'My second Book',
  description:'My second Redux Project with HTTP'
}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((item)=>(
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

export default Products;
