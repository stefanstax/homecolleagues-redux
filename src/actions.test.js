import * as actions from "./actions";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_COLLEAGUES_PENDING,
  REQUEST_COLLEAGUES_FAILURE,
  REQUEST_COLLEAGUES_SUCCESS,
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

it("should create  an ation to search colleagues", () => {
  const text = "wooo";
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it("handles requesting colleagues API", () => {
  const store = mockStore();
  store.dispatch(actions.requestColleagues())
  const action = store.getActions();
  console.log("action", action);
  const expectedAction = {
    type: REQUEST_COLLEAGUES_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});
