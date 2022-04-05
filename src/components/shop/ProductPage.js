import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Fragment, useRef } from 'react';
import { addToCart, duplicateProductHandler } from '../../store/actions';
import classes from './ProductPage.module.css';

const ProductPage = () => {
  const quantityInput = useRef();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const store = useSelector(store => store);

  const addToCartHandler = product => {
    if (
      store.cartProducts.some(cartProduct => cartProduct.name === product.name)
    ) {
      dispatch(
        duplicateProductHandler(product.name, +quantityInput.current.value)
      );
      return;
    }

    const updatedProduct = {
      ...product,
      quantity: quantityInput.current.value,
    };
    dispatch(addToCart(updatedProduct));
  };

  const [product] = store.products.filter(product => {
    if (product.name === state) return product;
  });

  return (
    <Fragment>
      <div className={classes.productHeader}>
        <div className={classes.headingContainer}>
          <h1>{product.name}</h1>
        </div>
      </div>

      <div className={classes.mainContaienr}>
        <div className={classes.imageContainer}>
          <img
            alt={product.name}
            src={product.image}
            className={classes.image}
          />
        </div>

        <div className={classes.infoContainer}>
          <h2 className={classes.name}>{product.name}</h2>
          <p className={classes.price}>$ {product.price.toFixed(2)} USD</p>
          <form onSubmit={e => e.preventDefault()}>
            <label>Quantity</label>
            <div>
              <input
                ref={quantityInput}
                type="number"
                name="quantity"
                id="number"
                min="1"
                defaultValue="1"
              />
              <button onClick={addToCartHandler.bind(null, product)}>
                Add To Cart
              </button>
            </div>
          </form>
          <div className={classes.textContainer}>
            <h2>What's a Rich Text element?</h2>
            <p>
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. Just
              double-click and easily create content.
            </p>
            <h4>Static and dynamic content editing</h4>
            <p>
              A rich text element can be used with static or dynamic content.
              For static content, just drop it into any page and begin editing.
              For dynamic content, add a rich text field to any collection and
              then connect a rich text element to that field in the settings
              panel. Voila!
            </p>
            <h4>How to customize formatting for each rich text</h4>
            <p>
              Headings, paragraphs, blockquotes, figures, images, and figure
              captions can all be styled after a class is added to the rich text
              element using the "When inside of" nested selector system.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
