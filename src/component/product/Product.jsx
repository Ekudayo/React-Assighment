import { useState } from "react";
import styles from "../product/product.module.css"; // Importing CSS module for styling

const Product = () => {
  // State for product details
  const [product, setProduct] = useState({
    productName: "Wireless Headphones",
    price: "150",
    productDesc:
      "High-quality wireless over-ear headphones with noise cancellation.",
  });

  // Update functions
  const handleNameChange = (e) => {
    setProduct({ ...product, productName: e.target.value });
  };

  const handlePriceChange = (e) => {
    setProduct({ ...product, price: e.target.value });
  };

  const handleDescChange = (e) => {
    setProduct({ ...product, productDesc: e.target.value });
  };

  return (
    <div className={styles.productContainer}>
      <h2>Product Details</h2>
      <div className={styles.productDetails}>
        <label>Product Name:</label>
        <input
          type="text"
          value={product.productName}
          onChange={handleNameChange}
        />

        <label>Price:</label>
        <input type="text" value={product.price} onChange={handlePriceChange} />

        <label>Description:</label>
        <textarea
          value={product.productDesc}
          onChange={handleDescChange}
        ></textarea>
      </div>

      <div className={styles.productPreview}>
        <h3>Preview:</h3>
        <p>
          <strong>Name:</strong> {product.productName}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Description:</strong> {product.productDesc}
        </p>
      </div>
    </div>
  );
};

export default Product;
