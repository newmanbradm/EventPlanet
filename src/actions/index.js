import {SET_EVENTS, SET_CURRENT_EVENT, SET_USERS} from './types'

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