import axios from 'axios';
import { FETCH_USER, CREATE_RESERVATION } from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current_user");
    dispatch({type: FETCH_USER, payload: res.data});
};

export const createReservation = () => async (dispatch) => {

}