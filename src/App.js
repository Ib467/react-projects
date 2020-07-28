import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllPets from './views/AllPets';
import { Router, Redirect, navigate, Link } from '@reach/router'
import SinglePet from './views/SinglePet'
import NewPet from './views/NewPet'
import EditPet from './views/EditPet'



import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" gutterBottom>
                Pet Shelter
        </Typography>
        {/* <Link to="/new">Add pet</Link>  */}

        <Router>
        <AllPets path="/" />
        <SinglePet path="/:id" />
        <NewPet path="/new" /> 
        <EditPet path="edit/:id" />

        </Router>
    



    </div>
  );
}

export default App;
