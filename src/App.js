import { React, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
let products

function App() {
  const [items, setItems] = useState([]);
  const fetchPost = async () => {
    
  const response = await fetch(
     "https://fakestoreapi.com/products?limit=30"
    );
   const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  products = items.map(x => {
    return (
    <Card 
      key={x.id}
      title={x.title}
      price={x.price}
      description={x.description}
      category={x.category}
      image={x.image}
      rate={x.rating.rate}
      count={x.rating.count}
    />
    )

  })


  return (
    <div className="App">
      <Navbar/>
      <div className='spacing featured-container'>
        {products}
      </div>
    </div>
    );
}

export default App;
