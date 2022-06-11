const initSate =
  (!!sessionStorage.getItem("stateLogin") &&
    JSON.parse(sessionStorage.getItem("stateLogin"))) ||
  false;

export const auth = (state = initSate, action) => {
  switch (action.type) {
    case "login":
      return action.payload;

    default:
      return state;
  }
};
