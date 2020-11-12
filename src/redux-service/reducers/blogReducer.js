const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      const newstate = state.filter((item) => item.id != action.payload.id);
      console.log(newstate);
      return newstate;

    case 'INIT':
      console.log(action.payload.data);
      return action.payload.data;

    default:
      return state;
  }
};

export default blogReducer;
