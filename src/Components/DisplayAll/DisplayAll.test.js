import React from "react";
import {axios, mockAxios} from "axios";
import DisplayAll from "./DisplayAll";
import PlayersList from "./../PlayersList/PlayersList";
import mockAxiosAdapter from "axios-mock-adapter";

import { renderHook, act } from '@testing-library/react-hooks';


describe("Tests on displaying players component", () => {
    jest.mock("axios")
    const onClick = jest.fn(info => info ? false : true);
    const props = {
        info: false,
        text: 'Où sont-ils ?',
        onClick: onClick
    };
    const mockAxios = jest.genMockFromModule('axios')
    const wrapper = mount(<DisplayAll {...props}/>);
     const propsMock = {
        datas: [
            {
                data:{
                    age: 33,
                    height: 185,
                    last: [1, 0, 0, 0, 1],
                    points: 1982,
                    rank: 1,
                    weight: 85000
                },
                firstname: "Rafael",
                lastname: "Nadal",
                picture: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
                sex: "M",
                shortname: "R.NAD"
            },
            {
                data:{
                        age: 23,
                        height: 195,
                        last: [1, 1, 0, 0, 1],
                        points: 1992,
                        rank: 10,
                        weight: 88000
                    },
                    firstname: "Michael",
                    lastname: "Chang",
                    picture: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
                    sex: "M",
                    shortname: "M.CHAN"
            }
        ]
    }    
     beforeEach(() => {
      jest.useFakeTimers();
    });

    it('Should render.', () => {
        expect(mount(<DisplayAll {...props} />)).toMatchSnapshot();
    })

    it('Should turns info true/false', () => {
        const info = wrapper.find('#hideShowDisplay').prop("info");
        expect(info).toEqual(props.info);  
        expect(info).toBeFalsy();
        wrapper.props().onClick() 
        expect(onClick).toHaveBeenCalled();
    })  

    it('should show / hide players on click', () => {
        const test =  wrapper.find('#hideShowDisplay');
        expect(wrapper.find(PlayersList).length).toEqual(0);
        expect(wrapper.children().text()).toBe("Et les joueurs du mois sont...")
        test.simulate('click');
        wrapper.props().onClick();
        expect(wrapper.contains('PlayersList'));
        expect(wrapper.children().text()).toBe("Bravo à eux !")
        expect(wrapper.find(PlayersList).length).toEqual(1);
    });  
});

