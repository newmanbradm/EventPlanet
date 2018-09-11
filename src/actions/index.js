import {SET_EVENTS, SET_CURRENT_EVENT, SET_USERS, SET_CURRENT_VENUE, SET_CURRENT_GUEST, SET_CURRENT_SUPPLY, SET_CURRENT_POST, SET_CURRENT_COMMENT} from './types'

export const setUsersAction = data => ({
    type: SET_USERS,
    payload: data
})

export const setEventsAction = data => ({
    type: SET_EVENTS, 
    payload: data
})

export const setCurrentEventAction = eventObj => ({
    type: SET_CURRENT_EVENT,
    payload: eventObj
})

export const setCurrentVenueAction = venueObj => ({
    type: SET_CURRENT_VENUE,
    payload: venueObj
})

export const setCurrentGuestAction = guestObj => ({
    type: SET_CURRENT_GUEST,
    payload: guestObj
})

export const setCurrentSupplyAction = supplyObj => ({
    type: SET_CURRENT_SUPPLY,
    payload: supplyObj
})

export const setCurrentPostAction = postObj => ({
    type: SET_CURRENT_POST,
    payload: postObj
})

export const setCurrentCommentAction = commentObj => ({
    type: SET_CURRENT_COMMENT,
    payload: commentObj
})