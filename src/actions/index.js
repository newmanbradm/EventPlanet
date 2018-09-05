import { SET_EVENTS } from './types'

export const setEventsAction = data => ({
    type: SET_EVENTS, 
    payload: data
})