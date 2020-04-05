const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          ...action.payload
        }
      ];
    case "UPDATE_TODO": 
      const { updateId, date, description, inputValue, amount } = action.payload;
      state.map(({ sNo }, index) => {
        if (sNo === updateId) {
          state[index] = {
            date,
            description,
            inputValue,
            amount,
            sNo
          }
        }
      });
      return [
        ...state
      ]
    default:
      return state;
  }
};

export default todos;
