import React from "react";

import { shallow } from "enzyme";

import MainPage from "./MainPage";





let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestColleagues: jest.fn(),
        colleagues: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it("Expect to render MainPage Component", () => {
    expect(wrapper).toMatchSnapshot();
});

it("Filters Colleagues Correctly when search found", () => {
    const mockProps2 = {
        onRequestColleagues: jest.fn(),
        colleagues: [{
            id: 3,
            name: 'Stefan Stax',
            email: 'stefanstaxbusiness@gmail.com'
        }],
        searchField: 'stefan stax',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper.instance().filterColleagues()).toEqual([])
    expect(wrapper2.instance().filterColleagues()).toEqual([{
        id: 3,
        name: 'Stefan Stax',
        email: 'stefanstaxbusiness@gmail.com'
    }])
})

it("Filters Colleagues Correctly when search not found", () => {
    const mockProps3 = {
        onRequestColleagues: jest.fn(),
        colleagues: [{
            id: 3,
            name: 'Stefan Stax',
            email: 'stefanstaxbusiness@gmail.com'
        }],
        searchField: 'stefanstax',
        isPending: false
    }
    const wrapper3 = shallow(<MainPage {...mockProps3} />)
    expect(wrapper3.instance().filterColleagues()).toEqual([])

})





it("Show the loading page", () => {

    const mockProps4 = {
        onRequestColleagues: jest.fn(),
        colleagues: [],
        searchField: '',
        isPending: true
    }
    const wrapper4 = shallow(<MainPage {...mockProps4} />)
    expect(wrapper4).toEqual({})
})