/*jshint esversion: 6 */
export default function(state=null, action) {
  console.log('active', 'state:', state, 'action:', action);
  switch (action.type) {
  case "TODO_SELECTED":
    return action.payload;
    break;
}
return state;
}
