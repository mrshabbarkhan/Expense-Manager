const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "EDIT":
      return {
        ...state,
        edit: { transaction: action.payload, isEdit: true },
      };
    case "UPDATE":
      return {
        ...state,
        transactions: state.transactions.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        edit: { transaction: {}, isEdit: false },
      };
    default:
      return state;
  }
};

export default ExpenseReducer;
