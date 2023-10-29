import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RentalItemCard from './RentalItemCard';
import Navbar from './Navbar';
import ItemDetail from './ItemDetail';

function App() {
  const [items, setItems] = useState([]);

  const url = 'http://localhost:3000/';

  useEffect(() => {
    getRentalItems();
  }, []);

  const getRentalItems = () => {
    axios
      .get(`${url}rentalItems`)
      .then((response) => {
        const rentalItems = response.data;
        setItems(rentalItems);
      })
      .catch((error) => console.error(`Error:${error}`));
  };

  return (
    <Router>
      <Routes>
      <Route
          path="/item/:_id"
          element={<><Navbar /><ItemDetail items={items} /></>}
        />
        <Route
          path="/"
          element={<><Navbar /><RentalItemCard items={items} /></>} />
      </Routes>
    </Router>
  );
}

export default App;
