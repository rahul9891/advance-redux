import {useDispatch} from 'react-redux'
import Card from '../UI/Card';
import { cartActions } from '../../store/cart-slice';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;
  const addItemHandler = () => {
    dispatch(cartActions.addItem({
      id: props.id,
      name: props.title,
      price: props.price,
      quantity: 1
    }));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
