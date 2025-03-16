export const fetchUserRequest = () => ({  type: 'FETCH_USER_REQUEST' });
export const fetchUserSuccess = (user) => ({  type: 'FETCH_USER_SUCCESS', payload: user });
export const fetchUserFailure = (error) => ({  type: 'FETCH_USER_FAILURE', payload: error });

export const fetchUser = (uid) => {
  return async (dispatch) => {
    if (uid < 1) {
      dispatch(fetchUserSuccess({}));
      return;
    }
    dispatch(fetchUserRequest());
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${uid}`);
      const user = await response.json();
      dispatch(fetchUserSuccess(user));
    } catch (error) {
      dispatch(fetchUserFailure(error));
    }
  };
};