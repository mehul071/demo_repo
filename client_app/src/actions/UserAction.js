import axios from "axios";
import { response } from "express";

export const registerUser = (user) => (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    axios.post("/api/users/register", { user });
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILURE", payload: error });
  }
};
