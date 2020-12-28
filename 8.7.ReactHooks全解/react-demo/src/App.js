//useReducer 代替redux
import React, { useReducer } from "react";
import User from "./components/user";
import Books from "./components/books";
import Movies from "./components/movies";
import Context from "./Context";
import userReducer from "./reducers/user_reducer";
import booksReducer from "./reducers/books_reducer";
import moviesReducer from "./reducers/movies_reducer";
const store = {
  user: null,
  books: null,
  movies: null,
};
const obj = {
  ...userReducer,
  ...booksReducer,
  ...moviesReducer,
};
const reducer = (state, action) => {
  const fn = obj[action.type];
  if (fn) {
    return fn(state, action);
  } else {
    throw new Error("参数错误");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <User />
      <Books />
      <Movies />
    </Context.Provider>
  );
}

export default App;
