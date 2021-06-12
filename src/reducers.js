import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_COLLEAGUES_PENDING, 
    REQUEST_COLLEAGUES_FAILURE, 
    REQUEST_COLLEAGUES_SUCCESS
}  from "./constants"

const initialStateSearch = {
    searchField: '',
}

const initialStateColleagues = {
    isPending: false,
    colleagues: [],
    error: ""
}

export const searchColleagues = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}

export const requestColleagues = (state=initialStateColleagues, action={}) => {
    switch(action.type) {
        case REQUEST_COLLEAGUES_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_COLLEAGUES_SUCCESS:
            return Object.assign({}, state, {colleagues: action.payload, isPending: false})
        case REQUEST_COLLEAGUES_FAILURE:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state
    }
}