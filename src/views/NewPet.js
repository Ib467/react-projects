import React, {useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




export default function NewPet(){

    const [name, setName] = useState('')
    const [pet_type, setType] = useState('') 
    const [description, setDescription] = useState('')  
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [errors, setErrors] = useState(null) // new erros


    function handleSubmit (event){
        event.preventDefault()
        axios.post('http://localhost:8000/api/pets', {
                "name": name,
                "pet_type": pet_type,
                "description": description,
                "skillOne": skillOne,
                "skillTwo": skillTwo,
                "skillThree": skillThree
                
           })
        .then(() => navigate('/'))
        .catch((err) => {
        //console.log(err.response)
           setErrors(err.response.data.errors);
          // console.log(errors)
        })
    }


    return(
        <>
          <Link to="/" > Home</Link>

        
        <div>
           <Typography variant="h4" component="h4" gutterBottom>Add A new pet here</Typography>
            </div>
            <form onSubmit={handleSubmit} >
                <div> 
                    <label>Pet Name: </label>
                    <input 
                        name="name"
                        value= {name}
                        onChange= {e => setName(e.target.value)}
                    />
                    {errors && (
                        <span style={{ color: "red" }}>
                        {/* ?. is optional chaining method for errors, NEW feature in JS */}
                        {errors?.name?.properties?.message}
                        </span>
                        )}
                </div>
                <div> 
                    <label>Pet Type: </label>
                    <input 
                        name="pet_type"
                        value= {pet_type}
                        onChange= {e => setType(e.target.value)}
                    />
                    {errors && (
                        <span style={{ color: "red" }}>
                        {/* ?. is optional chaining method for errors, NEW feature in JS */}
                        {errors?.pet_type?.properties?.message}
                        </span>
                        )}
                </div>
                <div> 
                    <label>Pet Description: </label>
                    <input 
                        name="description"
                        value= {description}
                        onChange= {e => setDescription(e.target.value)}
                    />
                    {errors && (
                        <span style={{ color: "red" }}>
                        {/* ?. is optional chaining method for errors, NEW feature in JS */}
                        {errors?.description?.properties?.message}
                        </span>
                        )}
                </div>
                <h3>Skills Optional</h3>
                <div> 
                    <label>Skill 1: </label>
                    <input 
                        name="skillOne"
                        value= {skillOne}
                        onChange= {e => setSkillOne(e.target.value)}
                    />
                </div>
                <div> 
                    <label>Skill 2: </label>
                    <input 
                        name="skillTwo"
                        value= {skillTwo}
                        onChange= {e => setSkillTwo(e.target.value)}
                    />
                </div>
                <div> 
                    <label>Skill 3: </label>
                    <input 
                        name="skillThree"
                        value= {skillThree}
                        onChange= {e => setSkillThree(e.target.value)}
                    />
                </div>
              <button> Add Pet</button>

                 
            </form>
        </>
    )
}

