import { Button, Container, FormControl, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration : "none",
      boxShadow : "none",
      color : "white"
    }
  }));

export default function AddStudent() {
    const [name, setName] = useState("");
    const[surname, setSurname] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");
    const[identity, setIdentity] = useState("");
    const[city, setCity] = useState("");
    const[town, setTown] = useState("");

    const [cities, setCities] = useState([
        { value: 1, text: "İzmir" },
        { value: 2, text: "İstanbul" },
        { value: 3, text: "Ankara" },
    ]);

    const [towns, setTowns] = useState([
        { cityId: 1, value: 1, text: "Karşıyaka" },
        { cityId: 1, value: 2, text: "Buca" },
        { cityId: 1, value: 3, text: "Konak" },
        { cityId: 2, value: 4, text: "Kadıköy" },
        { cityId: 2, value: 5, text: "Bakırköy" },
        { cityId: 3, value: 6, text: "Çankaya" },
        { cityId: 3, value: 7, text: "Keçiören" },
        { cityId: 3, value: 8, text: "Mamak" },
      ]);

    const [tmpTowns, setTmpTowns] = useState([]);

    const handleName = (value)=>{
        setName(value);
    }
    const handleSurname = (value)=>{
        setSurname(value);
    }
    const handlePhoneNumber = (value)=>{
        setPhoneNumber(value);
    }
    const handleIdentity = (value)=>{
        setIdentity(value);
    }
    const handleCity = (event) =>{
        const selectedCityName = event.target.value;
        setCity(selectedCityName);
        if(selectedCityName ==="Ankara"){
            setTmpTowns([
              { cityId: 3, value: 6, text: "Çankaya" },
              { cityId: 3, value: 7, text: "Keçiören" },
              { cityId: 3, value: 8, text: "Mamak" },
            ])
          }
          else if(selectedCityName ==="İzmir"){
            setTmpTowns([
              { cityId: 1, value: 1, text: "Karşıyaka" },
              { cityId: 1, value: 2, text: "Buca" },
              { cityId: 1, value: 3, text: "Konak" },
            ])
          }
          else if(selectedCityName==="İstanbul"){
            setTmpTowns([
              { cityId: 2, value: 4, text: "Kadıköy" },
              { cityId: 2, value: 5, text: "Bakırköy" },
            ])
           }
    }

    const handleTown=(event)=>{
        const selectedTownName = event.target.value;
        setTown(selectedTownName);
    }

    const handleSubmit = () =>{
        fetch("/students",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                identityNumber: identity,
                name: name,
                surname: surname,
                phoneNumber : phoneNumber,
                cityName: city,
                townName: town
            }),
        })
        .then((res) => res.json()
        .catch((err) =>console.log(err)))
    }
    const classes = useStyles();  
  return (
    <Container fixed>
        <TextField
          id="standard-full-width"
          style={{ margin: 8 , textAlign: 'center'}}
          placeholder={"Name"}
          fullWidth
          onChange={(i) => handleName(i.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Surname"
          fullWidth
          onChange={(i) => handleSurname(i.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Identity Number"
          fullWidth
          onChange={(i) => handleIdentity(i.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          style={{ margin: 8, textAlign:"center" }}
          placeholder="Phone Number"
          fullWidth
          onChange={(i) => handlePhoneNumber(i.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
            id="standard-full-width"
            select
            style={{ margin: 8 }}
            label="Select City"
            onChange={handleCity}   
            fullWidth        
            align='left'
            InputLabelProps={{
                shrink: true,
              }}
          >
            {cities.map((option) => (
              <option key={option.value} value={option.text}>
                {option.text}
              </option>
            ))}
          </TextField>

          <TextField
            id="standard-full-width"
            select
            style={{ margin: 8 }}
            label="Select Town"
            onChange={handleTown}
            fullWidth
            align='left'
            InputLabelProps={{
                shrink: true,
              }}
          >
              {tmpTowns.map((item) => (
              <option key={item.value} value={item.text}>
                {item.text}
            </option>
          ))}
          </TextField>
          <Button onClick={handleSubmit} variant="contained">ADD</Button>
          {/* <Link className={classes.link} to="/"><Button onClick={handleSubmit} variant="contained">ADD</Button></Link>  */}

      </Container>
  )
}
