import styles from "./index.module.css";

const CardList = ({ listData, deleteItem, editItem }) => {
  if (listData.length === 0) {
    return <h2>No Expenses Found</h2>;
  }

  return (
    <div className={styles.listContainer}>
      {listData.map((item) => (
        <div key={item.id} className={styles.card}>
          <h3>{item.data.title}</h3>
          <p>Price: ${item.data.price}</p>
          <p>Date: {item.data.date}</p>
          <div className={styles.buttonGroup}>
            <button
              onClick={() => editItem(item.id)}
              className={styles.editBtn}
            >
              Edit
            </button>
            <button
              onClick={() => deleteItem(item.id)}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
