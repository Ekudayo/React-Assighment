import { useState } from "react";
import styles from "../eCommerseCart/cart.module.css";

const Cart = () => {
  // Sample products
  const products = [
    { id: 1, name: "Wireless Mouse", price: 15 },
    { id: 2, name: "Bluetooth Headphones", price: 45 },
    { id: 3, name: "USB Keyboard", price: 20 },
  ];

  // State for cart items
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove product from cart by index
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cartContainer}>
      <h2>🛒 Simple E-Commerce Cart</h2>

      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <p>
              <strong>{product.name}</strong>
            </p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className={styles.cartSection}>
        <h3>🛍️ Cart:</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)}>❌</button>
              </li>
            ))}
          </ul>
        )}

        <h4>Total Price: ${totalPrice}</h4>
      </div>
    </div>
  );
};

export default Cart;
