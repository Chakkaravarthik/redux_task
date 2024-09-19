// QuantityReducer.js

const initialState = {
    Quantity: 1,
  };
  
  const QuantityReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          Quantity: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default QuantityReducer;
  