// In your React component
import { useState, useEffect } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/items');
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Items from Database</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;