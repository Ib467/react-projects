import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router'


//styling material ui lib
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    table: {
      minWidth: "40%",
    }
  });
  

export default function AllPets(){
    const [pet, setPets] = useState([])
    const [hasError, setHasError] = useState(null) // new erros

    const classes = useStyles();
    //sorting the pets by type 
    useEffect (() => {
        axios.get('http://localhost:8000/api/pets',)
        .then(response => {
          response.data.sort((a, b) => (a.pet_type > b.pet_type) ? 1 : -1)
          setPets(response.data)
        })
        .catch(() => setHasError(true))
    }, [])



    return (
        <>

      <Link to="/new">Add pet</Link> 
        <div>
            <h2> These Pets are looking for a good home: </h2>

            
        {/* <h1> New Table here</h1> */}

        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pet.map(pet => (
            <TableRow key={pet._id}>
              <TableCell component="th" scope="row">
                {pet.name}
              </TableCell>
              <TableCell align="center">{pet.pet_type}</TableCell>
              <TableCell align="right">
              
                <Link to={pet._id}>Details</Link> {' '}
                {/* <Link to={pet._id} class="all-title">Edit</Link> */}
                <a class="link" style={{color: 'blue'}} onClick={() => navigate('edit/' + pet._id)}>Edit</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>       

</>





        
    )

}