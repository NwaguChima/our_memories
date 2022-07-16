import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (data, navigate) => async (dispatch) => {
  try {
    const result = await api.signin(data);

    dispatch({ type: AUTH, data: { result } });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
