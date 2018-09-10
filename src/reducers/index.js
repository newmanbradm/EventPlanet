import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import eventReducer from "./eventReducer";
import usersReducer from './usersReducer'
import venueReducer from "./venueReducer";
import guestReducer from "./guestReducer";


const rootReducer = combineReducers({
    events: eventsReducer,
    currentEvent: eventReducer,
    currentVenue: venueReducer,
    currentGuest: guestReducer,
    users: usersReducer
})

export default rootReducer