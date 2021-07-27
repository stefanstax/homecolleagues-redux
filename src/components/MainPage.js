import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

// actions
import Header from "../components/Header";


class MainPage extends Component {

    componentDidMount() { this.props.onRequestColleagues() }

    filterColleagues = () => {
        return this.props.colleagues.filter(colleague => {
            return colleague.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    }

    render() {
        const { onSearchChange, isPending } = this.props;

        return (
            <div className="flex flex-col bg-indigo-900 h-screen">
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    {isPending ?
                        <h1 className="w-screen h-screen bg-indigo-900 text-white text-4xl flex justify-center items-center">Loading...</h1>
                        :
                        <ErrorBoundry>
                            <CardList colleagues={this.filterColleagues()} />
                        </ErrorBoundry>
                    }
                </Scroll>
                <div className="w-full mt-5 flex flex-wrap justify-center items-center py-7 bg-gray-900">
                    <div className="w-11/12 lg:w-80 md:w-80 flex items-center justify-between mx-2 my-3 md:my-0 font-medium p-3 rounded-md text-white shadow-2xl" style={{ backgroundColor: "rgb(0, 74, 173)" }}><p>View Code</p><a href="https://github.com/stefanstax/homecolleagues/" target="_blank" rel="noreferrer"><img alt="Graphic" src="https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff" /></a></div>
                    <div className="w-11/12 lg:w-80 md:w-80 flex items-center justify-between mx-2 my-3 md:my-0 font-medium p-3 rounded-md text-white shadow-2xl" style={{ backgroundColor: "rgb(0, 74, 173)" }}><p>View Code: (With Hooks)</p><a href="https://github.com/stefanstax/homecolleagues-whooks/" target="_blank" rel=" noreferrer"><img alt="Graphic" src="https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff" /></a></div>
                </div>
            </div>
        );
    }
}

export default MainPage;