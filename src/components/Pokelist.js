import ListItem from "./ListItem";

const PokeList = ({ list }) => {
  return list.map((pokemon) => <ListItem item={pokemon} />);
};

export default PokeList;
