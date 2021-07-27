import {
    CHANGE_SEARCH_FIELD,
    REQUEST_COLLEAGUES_PENDING,
    REQUEST_COLLEAGUES_FAILURE,
    REQUEST_COLLEAGUES_SUCCESS
} from "./constants"

import * as reducers from "./reducers"

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ""
    }
    it('should return the initial state', () => {
        expect(reducers.searchColleagues(undefined, {})).toEqual({
            searchField: ""
        })
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchColleagues(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: "abs"
        })).toEqual({
            searchField: "abs"
        })
    })
})

describe("requestColleagues", () => {
    const initialStateColleagues = {
        colleagues: [],
        isPending: false,
        error: ""
    }

    it("should return the initial state", () => {
        expect(reducers.requestColleagues(undefined, {})).toEqual(initialStateColleagues)
    })

    it("should handle REQUEST_COLLEAGUES_PENDING action", () => {
        expect(reducers.requestColleagues(initialStateColleagues, {
            type: REQUEST_COLLEAGUES_PENDING,
        })).toEqual({
            colleagues: [],
            error: "",
            isPending: true
        })
    })

    it("should handle REQUEST_COLLEAGUES_SUCCESS action", () => {
        expect(reducers.requestColleagues(initialStateColleagues, {
            type: REQUEST_COLLEAGUES_SUCCESS,
            payload: [{
                id: "123",
                name: "test",
                email: "test@gmail.com"
            }]
        })).toEqual({
            colleagues: [{
                id: "123",
                name: "test",
                email: "test@gmail.com"
            }],
            error: "",
            isPending: false
        })
    })

    it("should handle REQUEST_COLLEAGUES_FAILURE action", () => {
        expect(reducers.requestColleagues(initialStateColleagues, {
            type: REQUEST_COLLEAGUES_FAILURE,
            payload: 'NOOOOOO!!!!!!!!'
        })).toEqual({
            colleagues: [],
            error: "NOOOOOO!!!!!!!!",
            isPending: false
        })
    })
})