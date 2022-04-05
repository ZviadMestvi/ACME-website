import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import Product from './Product';
import classes from './Shop.module.css';

const Shop = () => {
  const navigate = useNavigate();
  const store = useSelector(store => store);
  const [selectedCategory, setSelectedCategory] = useState('');

  const viewProductPage = name => {
    navigate(`/shop/${name}`, {
      state: name,
    });
  };

  const selectCategory = category => {
    setSelectedCategory(category);
  };

  const products = store.products.map(product => {
    return (
      <Product
        key={product.name}
        name={product.name}
        price={product.price}
        image={product.image}
        viewProduct={viewProductPage}
      />
    );
  });

  const renderByCategory = store.products
    .filter(product => {
      if (product.category === selectedCategory) return product;
    })
    .map(product => {
      return (
        <Product
          key={product.name}
          name={product.name}
          price={product.price}
          image={product.image}
          viewProduct={viewProductPage}
        />
      );
    });

  return (
    <div>
      <div className={classes.shopHeader}>
        <div className={classes.headingContainer}>
          <h1>Shop Our Products</h1>
        </div>
      </div>

      <section>
        <div className={classes.mainContainer}>
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(34, 34, 34, 0.22), rgba(34, 34, 34, 0.69)),
              url(${store.featuredItem.image})`,
            }}
            className={classes.featuredItem}
            onClick={viewProductPage.bind(null, store.featuredItem.name)}
          >
            <button>Featured Item</button>
            <div>
              <h3>{store.featuredItem.name}</h3>
              <p>$ {store.featuredItem.price.toFixed(2)} USD</p>
            </div>
          </div>

          <div className={classes.productsSection}>
            <div className={classes.categoriesContainer}>
              <h2>Shop By Category</h2>
              <div>
                <div
                  className={classes.category}
                  onClick={selectCategory.bind(null, 'Gift Cards')}
                >
                  Gift Cards
                </div>
                <div
                  className={classes.category}
                  onClick={selectCategory.bind(null, 'Tents')}
                >
                  Tents
                </div>
                <div
                  className={classes.category}
                  onClick={selectCategory.bind(null, 'Accessories')}
                >
                  Accessories
                </div>
                <div
                  className={classes.category}
                  onClick={selectCategory.bind(null, 'Packs')}
                >
                  Packs
                </div>
              </div>
            </div>

            <div className={classes.productsContainer}>
              {selectedCategory === '' ? products : renderByCategory}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
