export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};
export const initItems = (data) => {
  return {
    type: 'INIT',
    payload: {
      data,
    },
  };
};
