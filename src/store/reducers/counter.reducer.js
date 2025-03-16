export const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INC': 
      return {  count: state.count + 1 };
    case 'DEC':
      if (state.count === 0) {
        return state;
      }
      return { count: state.count - 1 };
    default:
      return state;
  }
}