import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import eventReducer from "./eventReducer";
import usersReducer from './usersReducer'
import venueReducer from "./venueReducer";
import guestReducer from "./guestReducer";
import supplyReducer from "./supplyReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";


const rootReducer = combineReducers({
    events: eventsReducer,
    event: eventReducer,
    venue: venueReducer,
    guest: guestReducer,
    supply: supplyReducer,
    post: postReducer,
    comment: commentReducer,
    users: usersReducer
})

export default rootReducer