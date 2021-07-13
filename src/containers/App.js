import React, { Component } from "react";
import { connect } from "react-redux"
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

// actions
import {setSearchField, requestColleagues} from "../actions"
import Header from "../components/Header";

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

  componentDidMount() {this.props.onRequestColleagues()}

  render() {
    const { searchField, onSearchChange, colleagues, isPending } = this.props;
    const filteredcolleagues = colleagues.filter((colleague) => {
      return colleague.name.toLowerCase().includes(searchField.toLowerCase());
    });


    return isPending ? (
      <h1 className="w-screen h-screen bg-indigo-900 text-white text-4xl flex justify-center items-center">Loading...</h1>
    ) : (
      <>
      <div className="flex flex-col bg-indigo-900 h-screen">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList colleagues={filteredcolleagues} />
          </ErrorBoundry>
        </Scroll>
        <div className="w-full mt-5 flex flex-wrap justify-center items-center py-7 bg-gray-900">   
          <div className="w-11/12 lg:w-80 md:w-80 flex items-center justify-between mx-2 my-3 md:my-0 font-medium p-3 rounded-md text-white shadow-2xl" style={{backgroundColor: "rgb(0, 74, 173)" }}><p>View Code</p><a href="https://github.com/stefanstax/homecolleagues/" target="_blank" rel="noreferrer"><img alt="Graphic" src="https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff" /></a></div>
          <div className="w-11/12 lg:w-80 md:w-80 flex items-center justify-between mx-2 my-3 md:my-0 font-medium p-3 rounded-md text-white shadow-2xl" style={{backgroundColor: "rgb(0, 74, 173)" }}><p>View Code: (With Hooks)</p><a href="https://github.com/stefanstax/homecolleagues-whooks/" target="_blank" rel=" noreferrer"><img alt="Graphic" src="https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff"/></a></div>
        </div>
      </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);