import React from "react";
import "./PlayersList.css";

const accentE = "\u00e9";
const PlayersList = (props) => props.datas.map((player, i) => ( 
    <div key={player.shortname+i} className="componentStyle">
        <h2 className="marginStyle">{player.shortname}</h2>
        <div className="displayingPlayers">
            <img className="marginStyle" src={player.picture} alt={`${player.firstname} ${player.lastname}`}/>
            <ul className="styleList">
                <li>Nom: {player.firstname} {player.lastname}</li>
                <li>Rang: {player.data.rank}</li>
                <li>Points gagn{accentE}s: {player.data.points}</li>
                <li>Age: {player.data.age} ans</li>
                <li>Poids: {player.data.weight/1000} Kg</li>
                <ul className="styleList">Derniers r{accentE}sultats: 
                    <li>Gagn{accentE}s: {player.data.last.map((x) => x === 1 ).reduce((a,b) => a+b)}</li>
                    <li>Perdus: {player.data.last.map((x) => x === 0 ).reduce((a,b) => a+b)}</li>
                </ul>
            </ul>
        </div>
    </div>
))

export default PlayersList;