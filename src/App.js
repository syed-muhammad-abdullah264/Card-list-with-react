import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import CardList from "./components/cardList";

function App() {
  const [list, setList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const getData = (data) => {
    if (editingId !== null) {
      setList(
        list.map((item) => (item.id === editingId ? { ...item, data } : item))
      );
      setEditingId(null);
    } else {
      setList([{ data, id: Math.round(Math.random() * 1000) }, ...list]);
    }
  };
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    setEditingId(id);
  };
  const editingItem =
    editingId !== null ? list.find((item) => item.id === editingId) : null;

  return (
    <>
      <Form listData={getData} editingItem={editingItem} />
      <CardList listData={list} deleteItem={deleteItem} editItem={editItem} />
    </>
  );
}

export default App;
