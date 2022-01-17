export const createorderReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_ORDER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "CREATE_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
        order_data: action.payload,
      };
    case "CREATE_ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
