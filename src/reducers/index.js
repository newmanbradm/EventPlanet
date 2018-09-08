import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import eventReducer from "./eventReducer";
import usersReducer from './usersReducer'


const rootReducer = combineReducers({
    events: eventsReducer,
    currentEvent: eventReducer,
    users: usersReducer
})

export default rootReducer