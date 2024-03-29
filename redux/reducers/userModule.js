
// Initial state
const initialState = {
  auth: false,
  loggingIn: false,
  user: {},
  error: null
};

//Actions
const REQUEST_LOGIN = 'REQUEST_LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

//Action creators
export const requestLogin = () => ({
  type: REQUEST_LOGIN
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user: user
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  error: error
});

export const logout = () => ({
  type: LOGOUT
});

export const login = () => {

  return dispatch => {
    dispatch(requestLogin());
    dispatch(loginSuccess({ test: 'user' }));
  }
};


//Reducer
export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    // return state
    //   .set('loggingIn', true);

    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: true,
        loggingIn: false,
        user: action.user
      };
    // return state
    //   .set('auth', true)
    //   .set('loggingIn', false)
    //   .set('user', action.user);

    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: action.error
      };

    case LOGOUT:
      return {
        ...state,
        auth: false,
        loggingIn: false,
        user: {},
        error: null
      }

    default:
      return state;
  }
}