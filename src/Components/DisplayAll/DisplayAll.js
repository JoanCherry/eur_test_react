import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button/Button";
import PlayersList from "../PlayersList/PlayersList";

const DisplayAll = () => {
    const url = "https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json";
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(false);
    const toggleDisplay = () => {setDisplay(!display)}
    const accentA = "\u00e0";

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const response = await axios.get(url); 
        const json = response;
        setData(json.data.players);
    }

    return (
        <div>
            {display && <PlayersList datas={data}/>}
            <Button id="hideShowDisplay" onClick={toggleDisplay} info={display} text={display ? `Bravo ${accentA} eux !` : "Et les joueurs du mois sont..."}/>
        </div>
  )
}

export default DisplayAll