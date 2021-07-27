import { shallow } from 'enzyme';
import React from "react";
import CardList from "./CardList";

it('expect to render CardList component', () => {
    const mockColleagues = [
        {
            id: 1,
            name: "Stefan Stax",
            username: "stefanstax",
            email: "stefanstaxbusiness@gmail.com",
            address: {
                city: "Belgrade",
            },
            company: {
                name: "EnterMedSchool",
            },
            website: "entermedschool.com"
        }
    ]
    expect(shallow(<CardList colleagues={mockColleagues}/>)).toMatchSnapshot();
})