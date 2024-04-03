function login(id, password) {
  return (dispatch, getState) => {
    console.log("login success action");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

function logout() {
  return { type: "LOGOUT_SUCCESS" };
}

export const authenciateAction = { login, logout };
