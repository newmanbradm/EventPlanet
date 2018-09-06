import {SET_EVENTS, SET_CURRENT_EVENT} from './types'

export const setEventsAction = data => ({
    type: SET_EVENTS, 
    payload: data
})

export const setCurrentEventAction = eventObj => ({
    type: SET_CURRENT_EVENT,
    payload: eventObj
})