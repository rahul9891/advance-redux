import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
  id: 'p1',
  name: 'first book',
  description: 'first book released',
  price: 10
}, {
  id: 'p2',
  name: 'second book',
  description: 'second book released',
  price: 12
}]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem
          key={product.id}
          id={product.id}
          title={product.name}
          price={product.price}
          description={product.description}
        />)}

      </ul>
    </section>
  );
};

export default Products;
