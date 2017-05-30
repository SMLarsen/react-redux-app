/*jshint esversion: 6, -W138: false*/
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from '../constants/ActionTypes';

const initialState = {
  todos: [{
      id: 1,
      name: "Code",
      dueDate: new Date("2017-05-22"),
      doneDate: "",
      description: "Code something with React and Redux",
      completed: false,
      urgency: 8,
      importance: 6,
      archived: false
    },
    {
      id: 2,
      name: "Sleep",
      dueDate: new Date("2017-05-22"),
      doneDate: "",
      description: "Go to bed at decent time",
      completed: false,
      urgency: 4,
      importance: 10,
      archived: false
    },
    {
      id: 3,
      name: "Eat Breakfast",
      dueDate: new Date("2017-05-22"),
      doneDate: new Date("2017-05-22"),
      description: "Eat most important meal of the day",
      completed: true,
      urgency: 5,
      importance: 3,
      archived: false
    },
    {
      id: 4,
      name: "Eat",
      dueDate: new Date("2017-05-22"),
      doneDate: "",
      description: "Eat something",
      completed: false,
      urgency: 8,
      importance: 6,
      archived: false
    }
  ]
};

console.log('initialState:', initialState);

export default function todos(state = initialState, action) {
  console.log('reducer-todos', 'state:', state, 'action:', action);

  let newTodo = {
    id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    // name: action.payload.name,
    // dueDate: action.payload.dueDate,
    doneDate: null,
    // description: action.payload.description,
    completed: false,
    // urgency: action.payload.urgency,
    // importance: action.payload.importance,
    archived: false
  };


        let tester = Object.assign({}, state, state.todos.push(newTodo));
        console.log('newTodo:', tester);
  switch (action.type) {

    case ADD_TODO:
      // let newTodo = {
      //   id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      //   name: action.payload.name,
      //   dueDate: action.payload.dueDate,
      //   doneDate: null,
      //   description: action.payload.description,
      //   completed: false,
      //   urgency: action.payload.urgency,
      //   importance: action.payload.importance,
      //   archived: false
      // };

      let tester = Object.assign({}, state);
      console.log('newTodo:', tester);

      return Object.assign({}, state, state.todos.push(newTodo));

      // return [{ ...action.payload,
      //     id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      //     completed: false,
      //     archived: false,
      //     doneDate: null
      //   },
      //   ...state
      // ];

    case TOGGLE_TODO:
      if (todo.completed)
        return state.todos.map(todo =>
          todo.id === action.id ? { ...todo,
            completed: !todo.completed,
            doneDate: todo.doneDate === '' ? new Date().toDateString() : ''
          } :
          todo
        );

    case DELETE_TODO:
      return state.todos.filter(todo =>
        todo.id !== action.id
      );

    default:
      console.log('default:', state);
      return state;
  }
}
