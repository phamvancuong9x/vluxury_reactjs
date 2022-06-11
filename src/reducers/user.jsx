const initSate =
  (!!sessionStorage.getItem("userInfo") &&
    JSON.parse(sessionStorage.getItem("userInfo"))) ||
  {};

export const user = (state = initSate, action) => {
  switch (action.type) {
    case "change":
      const newUserInFo = [...state, ...action.payload];
      return newUserInFo;

    default:
      return state;
  }
};
