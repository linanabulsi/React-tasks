import React from "react";

const reactStringReplace = require('react-string-replace');

export function City({ city, state, population, wordToMatch, ...rest }) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    const cityName = reactStringReplace(city, wordToMatch, (match, i) => (
        <span className="hl">{match}</span>
    ))
    const stateName = reactStringReplace(state, wordToMatch, (match, i) => (
        <span className="hl">{match}</span>
    ))

    return (
        <li key={city + state} >
            <span className="name">{cityName}, {stateName}</span>
            <span className="population">{numberWithCommas(population)}</span>
        </li>
    );
}