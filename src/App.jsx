import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ItemCards from './ItemCards';
import Navbar from './Navbar';
import ItemDetail from './ItemDetail';

function App() {
  const [items, setItems] = useState([]);

  const url = 'http://192.168.4.75:3000/';

  useEffect(() => {
    getRentalItems();
  }, []);

  const getRentalItems = () => {
    // Simulate a random connection time between 500ms and 3000ms (0.5s to 3s)
    const randomTimeout = Math.floor(Math.random() * (3000 - 500 + 1)) + 500;
  
    // Display a loading state while waiting for the response
    // (You can set loading state in your component state if needed)
    console.log('Fetching rental items...');
  
    // Simulate the delay with setTimeout
    setTimeout(() => {
      axios
        .get(`${url}rentalItems`)
        .then((response) => {
          const rentalItems = response.data;
          setItems(rentalItems);
          console.log('Rental items loaded successfully.');
        })
        .catch((error) => console.error(`Error: ${error}`));
    }, randomTimeout);
  };

    // Regular fetch request
  /*const getRentalItems = () => {
    axios
      .get(`${url}rentalItems`)
      .then((response) => {
        const rentalItems = response.data;
        setItems(rentalItems);
      })
      .catch((error) => console.error(`Error:${error}`));
  };*/

  return (
    <Router>
      <Routes>
      <Route
          path="/item/:_id"
          element={<><Navbar /><ItemDetail items={items} /></>}
        />
        <Route
          path="/"
          element={<><Navbar /><ItemCards items={items} /></>} />
      </Routes>
    </Router>
  );
}

export default App;
