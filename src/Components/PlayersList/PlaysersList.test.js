import React from "react";
import PlayersList from "./PlayersList";

describe("list of players infos", () => {
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
    };
    it("should  receives data and make list", () => {
        expect(mount(<PlayersList {...propsMock} />)).toMatchSnapshot()
    })
});