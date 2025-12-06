import "./index.module.css";
import { useState } from "react";

const Form = (props) => {
  const [data, setData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.title || !data.price || !data.date) {
      alert("Please fill in all fields");
      return;
    }
    props.listData(data);
    setData({
      title: "",
      price: "",
      date: "",
    });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Expense Card</h2>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={data.title}
        minLength={2}
        maxLength={50}
        onChange={handleChange}
      />
      <label>Price</label>
      <input
        type="number"
        name="price"
        value={data.price}
        min={1}
        max={5000}
        onChange={handleChange}
      />
      <label>Date</label>
      <input
        type="date"
        name="date"
        value={data.date}
        min="2025-01-01"
        max="2025-12-31"
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default Form;
