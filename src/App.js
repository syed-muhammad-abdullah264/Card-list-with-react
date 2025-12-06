import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import CardList from "./components/cardList";

function App() {
  const [list, setList] = useState([]);

  const getData = (data) => {
    setList([{ data, id: Math.round(Math.random() * 1000) }, ...list]);
  };
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <>
      <Form listData={getData} />
      <CardList listData={list} deleteItem={deleteItem} />
    </>
  );
}

export default App;
