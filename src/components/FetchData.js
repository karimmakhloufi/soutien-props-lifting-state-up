import { useEffect } from "react";
import axios from "axios";

const FetchData = ({ setAppState }) => {
  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((data) => {
      setAppState(data.data.results);
    });
  };
  useEffect(getPokemon, []);
  return <p>Fetch data component</p>;
};

export default FetchData;
