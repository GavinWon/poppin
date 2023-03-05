import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import React, {useState} from 'react';
import Box from '@mui/material/Box'
import PartyItem from './components/PartyItem';


function Party(id, name, imageURL, price, date) {
  this.id = id
  this.name = name;
  this.imageURL = imageURL;
  this.price = price;
  this.date = date;
}



function App() {
  const [allParties, setAllParties] = useState([])
  const [listedParties, setListedParties] = useState([])
  const imageArray = [
    "https://assets.theschooloflife.com/wp-content/uploads/2022/02/21185852/dance.jpg",
    "https://snworksceo.imgix.net/dpn-34s/d1c51649-cd92-4a82-859e-dba7687262b2.sized-1000x1000.jpeg?w=1000",
    "https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?s=612x612&w=0&k=20&c=SoTKXXMiJYnc4luzJz3gIdfup3MI8ZlROFNXRBruc10=",
    "https://www.eastendfilmfestival.com/wp-content/uploads/2016/05/4-parties.jpg"

  ]

  const handleAdd = (e) => {
    e.preventDefault();
    var id = allParties.length;
    var name = (Math.random() + 1).toString(36).substring(7);
    var image = imageArray[Math.floor(Math.random() * imageArray.length)];
    var date = new Date();
    const party = new Party(id, name, image, 10.50, date);
    setAllParties(allParties => [...allParties, party])
    setListedParties(allParties)
  }

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      setListedParties(allParties);
    } else {
      const results = allParties.filter((party) => party.name.includes(e.target.value));
      setListedParties(results);
    }
      
    
  }

  return (
    <div className="App">
      <h1>Party App</h1>
      <form className="search" onSubmit={handleSubmit}>
        <input 
          className='search_input'
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
      </form>
      {listedParties.map((party) => {
          return (
            <PartyItem key={party.id} party={party} />
          )
      })}
      <Box component="form" onSubmit={handleAdd}>
        <Button type='submit'>Add</Button>
      </Box>
      
    </div>
  );
}

export default App;
