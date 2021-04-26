export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const signOutCurrentuser = () => ({
  type: "LOGOUT_CURRENT_USER",
});
