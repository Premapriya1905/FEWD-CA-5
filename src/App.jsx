import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Forms from './Components/Form';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get(`https://reactnd-books-api.udacity.com/books`, {
        headers: { Authorization: 'whatever-you-want' },
      })
      .then((res) => {
        setData(res.data.books);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 

  return (
    <div>
      <Router>
        <Navbar setSearchTerm={setSearchTerm} />
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <div className='container'>
                {filteredData.length > 0 ? (
                  filteredData.map((items) => (
                    <div key={items.id} className="book-item">
                      <h3 id="title">{items.title}</h3>
                      <div id="flex">
                        <img src={items.imageLinks.smallThumbnail} alt="thumbnail" />
                      </div>
                      {items.authors.map((author, index) => (
                        <span key={index}>{author}</span>
                      ))}
                      <p>Free</p>
                    </div>
                  ))
                ) : (
                  <p id='not-data'>No data found</p>
                )}
              </div>
            }
          />
          {/* Registration Page */}
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </Router>
      {/* for animation of falling snowballs */}
      <div className="snowballs-animation">
        {Array.from({ length: 50 }, (index) => (
          <div
            key={index}
            className="snowballs"
            style={{
              top: `${0}vh`,
              left: `${Math.random() * 100}vw`, // Random left position
              animationDuration: `${Math.random() * 3 + 1}s`, // Random duration
              animationDelay: `${Math.random()}s`, // Random delay
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;

