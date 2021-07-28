import axios from "axios";
import { setAuthToken } from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADED,
  CLEAR_PROFILE,
  LOGOUT,
} from "../types";
import { setAlert } from "./alertAction";

export const loadUser = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {}
};

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post("/api/users", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
      dispatch(setAlert("User registered successfully", "success"));
    } catch (err) {
      console.log(JSON.stringify(err.response.data.errors));
      const errors = err.response.data.errors;
      let timeout = 1000;
      if (errors) {
        errors.forEach((error) => {
          timeout = timeout + 2000;
          setTimeout(() => {
            dispatch(setAlert(error.msg, "danger"));
          }, timeout);
        });
      }
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post("/api/auth", body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
      dispatch(setAlert("User logged in successfully", "success"));
    } catch (err) {
      console.log(JSON.stringify(err.response.data.errors));
      const errors = err.response.data.errors;
      let timeout = 1000;
      if (errors) {
        errors.forEach((error) => {
          timeout = timeout + 2000;
          setTimeout(() => {
            dispatch(setAlert(error.msg, "danger"));
          }, timeout);
        });
      }
    }
  };

export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
