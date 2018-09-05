import * from './types'

export function fetchEvents() {
    return dispatch => {
        dispatch(fetchEventsBegin());
        return fetch("/events")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchEventsSuccess(json.events));
                return json.events;
            })
            .catch(error => dispatch(fetchEventsFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}