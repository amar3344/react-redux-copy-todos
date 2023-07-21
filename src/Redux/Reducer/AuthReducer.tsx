import Alert from 'react-native';

const initialState = {
  users: [],
  loggedInUsert: null,
  products: [
    {
      id: 1,
      name: 'pen',
      price: 5,
    },
    {
      id: 2,
      name: 'pencil',
      price: 5,
    },
    {
      id: 3,
      name: 'icecream',
      price: 20,
    },
    {
      id: 4,
      name: 'choclates',
      price: 10,
    },
    {
      id: 5,
      name: 'ball',
      price: 50,
    },
  ],
  username: '',
  email: '',
  password: '',
  verifyPassword: '',
  loginUser: '',
  loginPassword: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIGNIN':
      const newObj = {
        id: new Date(),
        username: state.username,
        email: state.email,
        password: state.password,
        verifyPassword: state.verifyPassword,
      };
      return {
        ...state,
        users: [...state.users, newObj],
        username: '',
        email: '',
        password: '',
        verifyPassword: '',
      };
    case 'HANDLE_USERNAME':
      return {
        ...state,
        [action.name]: action.payload,
      };
    case 'HANDLE_LOGINUSER':
      return {
        ...state,
        [action.name]: action.payload,
      };
    case 'LOGIN':
      return state.users.map((each: any) => {
        if (undefined) {
          console.log('----------------------------');
        } else if (
          each.email === state.loginUser &&
          each.password === state.loginPassword
        ) {
          console.log('=======');
        }
      });
    default:
      return state;
  }
};

export default reducer;
