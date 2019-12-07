//importing all the constants
import { CHANGE_SEARCH_FIELD,
         ROBOT_STATE_PENDING,
         ROBOT_STATE_SUCCESS,
         ROBOT_STATE_FAILED
        } from './searchRobot/constant.js'

//creating action for searchfield
export const setSearchField = (text) => {
    return ({
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    });
}

//creating action for users request from api
export const requestUsersAction = () => (dispatch) => {
    dispatch({type: ROBOT_STATE_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => dispatch({type: ROBOT_STATE_SUCCESS, payload: users}))
      .catch(error => dispatch({type:ROBOT_STATE_FAILED, payload:error}))
}