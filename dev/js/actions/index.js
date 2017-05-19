/*jshint esversion: 6 */
export const selectTodo = (todo) => {
  console.log(todo);
  return {
    type: "TODO_SELECTED",
    payload: todo
  };
};
