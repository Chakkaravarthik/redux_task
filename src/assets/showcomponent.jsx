import React from 'react';
import { useDispatch, useSelector } from 'react-redux';




const CartItem = () => {
 const {products} = useSelector((state)=>state.ProductReducer)
 const {Quantity} = useSelector((state)=>state.QuantityReducer)

 const dispatch = useDispatch();

 const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10); // convert string to number
    if (!isNaN(newQuantity) && newQuantity >= 1) { // validation for minimum value
      dispatch({ type: 'UPDATE_QUANTITY', payload: newQuantity });
    }
  };

  return (
    <div style={styles.cartItemContainer}>
      <div style={styles.bookDetails}>
        <img src="https://www.thetechedvocate.org/wp-content/uploads/2023/06/iPhone-14-eSIM-Design-660x400.webp" alt={products[0].title} style={styles.bookImage} />
        <div>
          <h2>{products[0].title}</h2>
          <p>Details & Care</p>
          <p>{products[0].description}</p>
          <p>Sustainability</p>
        </div>
      </div>

          <div style={styles.quantityAndPrice}>
              <div style={styles.twotwo}>
                  <span><h3>Quantity :</h3></span><input
                      type="number"
                      onChange={handleQuantityChange}
                      value={Quantity}
                      min="1"
                      style={styles.quantityInput}
                  />
              </div>
              <div style={styles.price}>${(Quantity * parseInt(products[0].price)).toFixed(2)}</div>
              <button style={styles.removeButton}>REMOVE</button>
          </div>
    </div>
  );
};

// Inline styles for quick setup (optional, feel free to replace with your own CSS)
const styles = {
  cartItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    padding: '20px',
    margin: '20px 0',
  },
  bookDetails: {
    display: 'flex',
    marginBottom: '20px',
  },
  bookImage: {
    width: '100px',
    height: '150px',
    marginRight: '20px',
  },
  quantityAndPrice: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px dotted black'
  },
  quantityInput: {
    width: '50px',
    padding: '5px',
    textAlign: 'center',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: 'orange',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  totalSection: {
    fontWeight:'normal'
  },
  twotwo :{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }
};

export default CartItem;
