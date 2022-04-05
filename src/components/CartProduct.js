import { useDispatch } from 'react-redux';
import { changeQuantity, removeCartItem } from '../store/actions';
import classes from './CartProduct.module.css';

const CartProduct = props => {
  const dispatch = useDispatch();

  const updateQuantity = (name, e) => {
    dispatch(changeQuantity(name, e.target.value));
  };

  const removeCartItemHandler = () => {
    dispatch(removeCartItem(props.name));
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.productContainer}>
        <div className={classes.infoContainer}>
          <div>
            <img
              src={props.image}
              alt={props.name}
              className={classes.productImage}
            />
          </div>

          <div className={classes.productName}>
            <h4>{props.name}</h4>
            <p>$ {props.price.toFixed(2)} USD</p>
          </div>
        </div>

        <div className={classes.inputContainer}>
          <label />
          <input
            type="text"
            pattern="[0-9]*"
            name="quantity"
            id="quantity"
            defaultValue={props.quantity}
            onChange={updateQuantity.bind(null, props.name)}
          />
        </div>
      </div>
      <p onClick={removeCartItemHandler} className={classes.removeBtn}>
        Remove
      </p>
    </div>
  );
};

export default CartProduct;
