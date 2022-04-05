import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import classes from './HomeS2.module.css';

const HomeS2 = () => {
  const navigate = useNavigate();
  const store = useSelector(store => store);

  const viewProductPage = product => {
    navigate(`/shop/${product.name}`, {
      state: product.name,
    });
  };

  const product1 = store.products[4];
  const product2 = store.products[1];
  const product3 = store.products[2];

  return (
    <Fragment>
      <section className={classes.heroContainer}>
        <div className={classes.hero}>
          <div className={classes.heroContent}>
            <h1>How we're keeping you safe during COVID-19</h1>
            <p>
              As an outdoor shop, we've taken precautionary measures to ensure
              the safety of all our customers and team members.
            </p>
            <button>Read our statement</button>
          </div>
        </div>
      </section>

      <section>
        <div className={classes.sectionContainer}>
          <div className={classes.sectionHeader}>
            <p>Shop products</p>
            <h2>Open 24/7/365.</h2>
          </div>

          <div className={classes.productsContainer}>
            <div className={classes.productContainer}>
              <div
                className={classes.productImage}
                style={{ backgroundImage: `url(${product1.image})` }}
                onClick={viewProductPage.bind(null, product1)}
              />
              <div className={classes.productInfo}>
                <p className={classes.productName}>{product1.name}</p>
                <p className={classes.productPrice}>
                  $ {product1.price.toFixed(2)} USD
                </p>
                <button onClick={viewProductPage.bind(null, product1)}>
                  Details
                </button>
              </div>
            </div>

            <div className={classes.productContainer}>
              <div
                className={classes.productImage}
                style={{ backgroundImage: `url(${product2.image})` }}
                onClick={viewProductPage.bind(null, product2)}
              />
              <div className={classes.productInfo}>
                <p className={classes.productName}>{product2.name}</p>
                <p className={classes.productPrice}>
                  $ {product2.price.toFixed(2)} USD
                </p>
                <button onClick={viewProductPage.bind(null, product2)}>
                  Details
                </button>
              </div>
            </div>

            <div className={classes.productContainer}>
              <div
                className={classes.productImage}
                style={{ backgroundImage: `url(${product3.image})` }}
                onClick={viewProductPage.bind(null, product3)}
              />
              <div className={classes.productInfo}>
                <p className={classes.productName}>{product3.name}</p>
                <p className={classes.productPrice}>
                  $ {product3.price.toFixed(2)} USD
                </p>
                <button onClick={viewProductPage.bind(null, product3)}>
                  Details
                </button>
              </div>
            </div>
          </div>

          <div className={classes.btnContainer}>
            <Link to="/shop">
              <button>View all products</button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeS2;
