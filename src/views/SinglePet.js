import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'
import Button from '@material-ui/core/Button';



export default function SinglePet({id}){
    const [name, setName] = useState('')
    const [pet_type, setType] = useState([]) 
    const [description, setDescription] = useState(null)  
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [hasError, setHasError] = useState(null) // new erros





  useEffect (() => {
    axios.get('http://localhost:8000/api/pets/' + id)
    .then(response => {
        setName(response.data.name)
        setType(response.data.pet_type)
        setDescription(response.data.description)
        setSkillOne(response.data.skillOne)
        setSkillTwo(response.data.skillTwo)
        setSkillThree(response.data.skillThree)

        
    });
    }, [id])

    function handleDelete (id){
        //console.log('in delete ' + id);
        axios.delete('http://localhost:8000/api/pets/' + id)
            .then(() => navigate('/'))
            //filter give us a brand new array
    }   



    return(
        <>
        <div>
            {/* //adopt the pet and remove from database */}
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => handleDelete(id)}>    
                Adopt {name}
            </Button> 
            
            <h2> Details about:</h2>
            {name}
            <div> <h2> Pet Type: </h2>{pet_type} </div>
            {/* <p> {name}</p> */}
            <h2> Description:</h2>
            <p> {description}</p>
            <h3> Skills: </h3>
                <ul> 
                    <li>
                        {skillOne}
                    </li>
                    <li>
                        {skillTwo}
                    </li>
                    <li>
                        {skillThree}
                    </li>
            </ul>
        </div>

        <Button 
                variant="contained" 
                color="primary" 
              >    
                Like {name}
            </Button> 
            <p> Likes: </p>
            

        </>

    )
}