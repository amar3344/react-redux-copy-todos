export const handleSignIn = (payload: any) => {
  return {
    type: 'SIGNIN',
    payload: payload,
  };
};

export const handleLogin = (payload: any, nav: any) => {
  console.log(nav);

  return {
    type: 'LOGIN',
    payload: payload,
    nav: nav,
  };
};

export const handleUsernameChange = (payload: any, name: any) => {
  return {
    type: 'HANDLE_USERNAME',
    payload: payload,
    name: name,
  };
};

export const handleEmailChange = (payload: any, name: any) => {
  return {
    type: 'HANDLE_LOGINUSER',
    payload: payload,
    name: name,
  };
};
