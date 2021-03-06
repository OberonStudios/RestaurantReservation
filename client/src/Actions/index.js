import axios from 'axios';
import { FETCH_USER, CREATE_RESERVATION } from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current_user");
    dispatch({type: FETCH_USER, payload: res.data});
};

export const createReservation = (data) => async (dispatch) => {
    axios.post("/api/createreservation", data);
}

export const removeReservation = (id) => async (dispatch) => {
    axios.post("/api/removereservation", {uuid: id});
}