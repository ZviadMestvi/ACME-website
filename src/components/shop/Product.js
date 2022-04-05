import classes from './Product.module.css';

const Product = props => {
  return (
    <div className={classes.productContainer}>
      <img
        alt={props.name}
        src={props.image}
        className={classes.productImage}
        onClick={props.viewProduct.bind(null, props.name)}
      />
      <div>
        <h4>{props.name}</h4>
        <p>$ {props.price.toFixed(2)} USD</p>
        <button onClick={props.viewProduct.bind(null, props.name)}>
          Details
        </button>
      </div>
    </div>
  );
};

export default Product;
