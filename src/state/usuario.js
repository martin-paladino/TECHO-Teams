import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setUsuario = createAction("SET_USARIO");

export const loginRequest = createAsyncThunk(
  "LOGIN",
  ({ mail, password, errorAlert, pushRegister }) => {
    return axios
      .post("http://localhost:3001/api/usuarios/login", {
        mail,
        password,
        errorAlert,
        pushRegister,
      })
      .then((res) => res.data)
      .catch(() => errorAlert());
  }
);

const usuarioReducer = createReducer(
  {},
  {
    [setUsuario]: (state, action) => action.payload,
    [loginRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default usuarioReducer;
