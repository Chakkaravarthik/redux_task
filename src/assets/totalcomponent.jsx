import react from 'react'
import { useSelector } from 'react-redux'

const TotalComponent = ()=>{
const {Quantity }= useSelector((s)=>s.QuantityReducer)
const {products} = useSelector((s)=>s.ProductReducer)

    return(
        <div style={styles.cartItemContainer}>
            <div style={styles.totalSection}>
                <p style={styles.price}>Subtotal: ${(Quantity * parseInt(products[0].price)).toFixed(2)}</p>
                <p>Shipping: FREE</p>
                <p style={styles.price}>Total: ${(Quantity * parseInt(products[0].price)).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default TotalComponent;


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
  