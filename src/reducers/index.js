import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import eventReducer from "./eventReducer";


const rootReducer = combineReducers({
    events: eventsReducer,
    currentEvent: eventReducer
})

export default rootReducer