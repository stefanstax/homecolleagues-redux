import {CHANGE_SEARCH_FIELD, REQUEST_COLLEAGUES_PENDING, REQUEST_COLLEAGUES_FAILURE, REQUEST_COLLEAGUES_SUCCESS} from "./constants"

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestColleagues = () => (dispatch) => {
    dispatch({type: REQUEST_COLLEAGUES_PENDING});
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {return response.json();})
        .then(data => dispatch({type: REQUEST_COLLEAGUES_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_COLLEAGUES_FAILURE, payload: error}))
}