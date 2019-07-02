import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
// import axios from "axios";
import request from '../request/request'

// export const getItems = () => dispatch => {
//   dispatch(setItemsLoading);
//   axios.get("/api/items").then(res =>
//     dispatch({
//       type: GET_ITEMS,
//       payload: res.data
//     })
//   );
// };

export const getItems = () => dispatch => {
  dispatch(setItemsLoading);
  const data = request('', 'GET');
  data.then((res) => {
    dispatch({
      type: GET_ITEMS,
      payload: res
    })
  })
  .catch(err => console.log(err))
}
// GET ITEM FINISHED

// ADD ITEM START
// export const addItem = item => dispatch => {
//   axios
//   .post('/api/items', item)
//   .then(res => 
//     dispatch({
//         type: ADD_ITEM,
//         payload: res.data
//     })
//     )
// };

export const addItem = item => dispatch => {
  const data = request('', 'POST', item);
  data.then((res) => {
    dispatch({
      type: ADD_ITEM,
      payload: res
    })
  })
}
// ADD ITEM FINISHED

// DELETE ITEM START
// export const deleteItem = id => dispatch => {
//   axios.delete(`/api/items/${id}`).then(res => 
//     dispatch({
//         type:DELETE_ITEM,
//         payload: id
//     })
//     )
// };

export const deleteItem = id => dispatch => {
  const data = request(id, 'DELETE');
  data.then((res) => {
    dispatch({
      type:DELETE_ITEM,
      payload: id
    })
  })
}
//DELETE ITEM FINISHED

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
