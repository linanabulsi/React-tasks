import React from "react";
import { City } from "../city/City";

export function DataForm() {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  const [cities, setCities] = React.useState([]);
  const [matchArray, setMatchArray] = React.useState([]);
  const [wordToMatch, setWordToMatch] = React.useState('');
  const input = React.useRef()

  function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex)
    });
  }

  function displayMatches(event) {
    setWordToMatch(input.current.value)
    setMatchArray(findMatches(wordToMatch, cities))
  }

  function debounce(func, wait = 1500, immediate = true) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


  React.useEffect(() => {
    fetch(endpoint)
      .then((blob) => blob.json())
      .then((data) => setCities(data));

  }, []);

  return (
    <form className="search-form">
      <input ref={input} type="text" className="search" placeholder="City or State" onChange={debounce(displayMatches)} onKeyUp={debounce(displayMatches)} />
      <ul className="suggestions">
        {matchArray.length === 0 ?
          <>
            <li>Filter for a city</li>
            <li>or state</li>
          </> :
          matchArray.map(city => {
            return (
              <City key={city.city + city.state} city={city.city} state={city.state} population={city.population} wordToMatch={wordToMatch} {...City} />
            )
          })
        }
      </ul>
    </form>
  );
}
