import React, { Component } from "react";
import { connect } from "react-redux"
import "./App.css";

import MainPage from "../components/MainPage";

// actions
import { setSearchField, requestColleagues } from "../actions"

const mapStateToProps = (state) => {
  return {
    searchField: state.searchColleagues.searchField,
    colleagues: state.requestColleagues.colleagues,
    isPending: state.requestColleagues.isPending,
    error: state.requestColleagues.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestColleagues: () => dispatch(requestColleagues())
  }
}

class App extends Component {
  render() {
    return (
      <MainPage {...this.props} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);