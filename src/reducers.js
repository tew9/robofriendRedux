import { CHANGE_SEARCH_FIELD,
    ROBOT_STATE_PENDING,
    ROBOT_STATE_SUCCESS,
    ROBOT_STATE_FAILED
   } from './searchRobot/constant.js'

const initialState = {
    searchField: '',
}

export const searchRobots = (state = initialState, action = {}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}

const initialStateUsers = {
    ispending: false,
    users: [],
    error: ''
}

export const requestUsers = (state = initialStateUsers, action = {}) =>{
    switch(action.type){
        case ROBOT_STATE_PENDING:
            return Object.assign({}, state, {ispending: true})
        case ROBOT_STATE_SUCCESS:
            return Object.assign({}, state, {users: action.payload, ispending: false})
        case ROBOT_STATE_FAILED:
            return Object.assign({}, state, {error: action.payload, ispending: false})
        default:
            return state;
    }
}