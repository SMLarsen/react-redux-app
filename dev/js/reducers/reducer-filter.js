/*jshint esversion: 6 */
// export default function() {
  console.log('filter');
//     return ([
//       {
//         visibilityFilter: 'All'
//       }
//     ]);
// }

export default function(state={visibilityFilter: 'All'}, action) {
  console.log('active', 'state:', state, 'action:', action);
  switch(action.type) {
    case "FILTER_TODO_LIST":
      return action.payload;
      break;
  }
  return state;
}
