import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequestAction, nextRequestAction } from "../redux/requestDucks";

const List = (props) => {
  return (
    <ul>
      {props.requests !== undefined ? props.requests.map((item) => (
        <li key={item._id}>{item.message}</li>
      )) : <h1>Cargando...</h1>}
    </ul>
  );
};

const Request = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRequestAction());
  }, []);

  const requests = useSelector((store) => store.requests.array);

  return (
    <div>
      Requets List:
      <button onClick={() => dispatch(nextRequestAction())}>Next</button>
      {<List requests={requests} />}
    </div>
  );
};

export default Request;
