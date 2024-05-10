const initialState = {
    transactions: {},
  };
  
  const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: {
            ...state.transactions,
            [action.payload.txHash]: action.payload,
          },
        };
      case 'UPDATE_TRANSACTION':
        return {
          ...state,
          transactions: {
            ...state.transactions,
            [action.payload.txHash]: {
              ...state.transactions[action.payload.txHash],
              ...action.payload.update,
            },
          },
        };
      default:
        return state;
    }
  };
  
  export default transactionReducer;
  