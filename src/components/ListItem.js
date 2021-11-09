const ListItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      <p>Name: {item.name}</p>
      <p>{item.url}</p>
    </div>
  );
};

export default ListItem;
