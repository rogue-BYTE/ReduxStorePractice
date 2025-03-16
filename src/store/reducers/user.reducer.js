export const userReducer = (state = { user: {}, is_loading: false, error: null }, action) => {
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return { ...state, is_loading: true };
    case 'FETCH_USER_SUCCESS':
      return { error: null, is_loading: false, user: action.payload };
    case 'FETCH_USER_FAILURE':
      return { user: {}, is_loading: false, error: action.payload };
    default:
      return state;
  }
};