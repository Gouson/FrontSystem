import React, { useContext, useEffect } from "react";
import Context from '../Context';
import ajax from '../ajax'
function Movies() {
  const { state, dispatch } = useContext(Context);
  //只执行一次
  useEffect(() => {
    ajax("/movies").then((movies) => {
      dispatch({ type: "setMovies", movies });
    });
  }, []);
  return (
    <div>
      <h1>电影</h1>
      <ol>
        {state.movies
          ? state.movies.map((movie) => <li key={movie.id}>{movie.name}</li>)
          : "加载中"}
      </ol>
    </div>
  );
}


  export default Movies