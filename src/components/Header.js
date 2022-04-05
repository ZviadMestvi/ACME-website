import { useState, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toggleMobileMenu } from '../store/actions';
import shoppingCart from '../assets/home/shopping-cart.svg';
import hamburgerMenu from '../assets/hamburger-menu.svg';
import classes from './Header.module.css';
import close from '../assets/home/close-icon.svg';
import logo from '../assets/home/logo.svg';
import CartProduct from './CartProduct';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector(store => store);
  const [cartVis, setCartVis] = useState(false);

  const goToHome = () => {
    navigate('/home/');
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMobileMenu());
  };

  const renderCartProducts = store.cartProducts.map(product => {
    return (
      <CartProduct
        key={product.name}
        name={product.name}
        price={product.price}
        image={product.image}
        quantity={product.quantity}
      />
    );
  });

  const totalAmount =
    store.cartProducts.length !== 0
      ? store.cartProducts
          .map(product => product.price * product.quantity)
          .reduce((prev, curr) => prev + curr)
          .toFixed(2)
      : 0;

  return (
    <Fragment>
      <div className={classes.headerContainer}>
        <div className={classes.announcementContainer}>
          <div>
            <div className={classes.announcement}>Announcement</div>
            <div>
              <p>How we're responding to COVID-19</p>
            </div>
          </div>
        </div>

        <div className={classes.header}>
          <div className={classes.headerContent}>
            {!store.mobileMenuVis && (
              <div className={classes.logoContainer}>
                <img src={logo} alt="website logo" onClick={goToHome} />
              </div>
            )}

            <div className={classes.headerMenuContainer}>
              <ul>
                <li>
                  <Link className={classes.link} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} to="about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} to="shop">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} to="donate">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} to="contact">
                    Contact
                  </Link>
                </li>
              </ul>

              {!store.mobileMenuVis && (
                <div
                  className={classes.cartIconContainer}
                  onClick={setCartVis.bind(null, true)}
                >
                  <img src={shoppingCart} alt="shopping cart" />
                  <span>{store.cartProducts.length}</span>
                </div>
              )}

              <div onClick={toggleMenuHandler}>
                <img
                  src={hamburgerMenu}
                  alt="hamburger menu"
                  id={classes.hamburgerMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart */}

      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={cartVis}
        timeout={300}
        classNames={{
          enterActive: classes.openCart,
          exitActive: classes.closeCart,
        }}
      >
        <Fragment>
          <div className={classes.sideCart}>
            <div className={classes.cartHeader}>
              <h4>Your Cart</h4>
              <img
                src={close}
                alt="close icon"
                onClick={setCartVis.bind(null, false)}
                className={classes.closeBtn}
              />
            </div>

            {store.cartProducts.length === 0 ? (
              <p className={classes.noItems}>No items found.</p>
            ) : (
              <div className={classes.cartProductsContainer}>
                {renderCartProducts}
              </div>
            )}

            {store.cartProducts.length !== 0 && (
              <div className={classes.checkoutContainer}>
                <div className={classes.subtotalContainer}>
                  <p>Subtotal</p>
                  <p>
                    <b>$ {totalAmount} USD</b>
                  </p>
                </div>
                <div>
                  <button>Continue to Checkout</button>
                </div>
              </div>
            )}
          </div>

          <div
            className={classes.overlay}
            onClick={setCartVis.bind(null, false)}
          />
        </Fragment>
      </CSSTransition>
    </Fragment>
  );
};

export default Header;
