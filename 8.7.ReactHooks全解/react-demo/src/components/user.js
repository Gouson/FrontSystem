import React, { useReducer, useContext, useEffect } from "react";
import Context from '../Context';
import ajax from '../ajax'
function User() {
    const { state, dispatch } = useContext(Context);
    //只执行一次
    useEffect(() => {
      ajax("/user").then((user) => {
        console.log(user)
        dispatch({ type: "setUser", user });
      });
    }, []);
    return (
      <div>
        <h1>个人信息</h1>
        <p>name:{state.user ? state.user.name : ""}</p>
      </div>
    );
  }

  export default User