const initSate = {
  showNotifyDeleteProduct: false,
  idShowConfirm: { id: null, size: null },
};

export const cart = (state = initSate, action) => {
  let newState;
  switch (action.type) {
    case "showNotifyDelete":
      newState = { ...state, showNotifyDeleteProduct: action.payload };
      return newState;
    case "IdShowConfirm":
      newState = { ...state, idShowConfirm: action.payload };
      return newState;
    default:
      return state;
  }
};
