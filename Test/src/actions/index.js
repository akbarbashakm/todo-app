let nextTodoId = 0;
export const addTodo = payLoad => ({
  type: "ADD_TODO",
  payload: {
    ...payLoad,
    sNo: 'WALLET_' + (nextTodoId++),
  }
});

export const updateTodo = (payLoad, sNo) => ({
  type: "UPDATE_TODO",
  payload: {
    ...payLoad,
    updateId: sNo
  }
});
