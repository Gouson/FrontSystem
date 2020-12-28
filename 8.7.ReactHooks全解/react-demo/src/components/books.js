import React, { useContext, useEffect } from "react";
import Context from '../Context';
import ajax from '../ajax'
function Books() {
  const { state, dispatch } = useContext(Context);
  //只执行一次
  useEffect(() => {
    ajax("/books").then((books) => {
      dispatch({ type: "setBooks", books });
    });
  }, []);
  return (
    <div>
      <h1>我的书籍</h1>
      <ol>
        {state.books
          ? state.books.map((book) => <li key={book.id}>{book.name}</li>)
          : "加载中"}
      </ol>
    </div>
  );
}

  export default Books