import { Button, Container, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration : "none",
    boxShadow : "none",
    color : "white"
  },
  text:{
    textAlign: "center"
  }
}));
export default function UpdateStudent() {
  const location  = useLocation()
  const{id, name, surname, identityNumber, phoneNumber, cityName, townName, cityId, townId} = location.state;
  
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
  const classes = useStyles();  

  const handleTown=(event)=>{
  const selectedTownName = event.target.value;
  setTown(selectedTownName);
  }


  const [nameTmp, setNameTmp] = useState(name);
  const [surnameTmp, setSurnameTmp] = useState(surname);
  const [identityNumberTmp, setIdentityNumberTmp] = useState(identityNumber);
  const [phoneNumberTmp, setPhoneNumberTmp] = useState(phoneNumber);
  const [city, setCity] = useState(cityName);
  const [town, setTown] = useState(townName);


  const handleName = (value) =>{
    setNameTmp(value);
  }
  const handleSurname = (value) =>{
    setSurnameTmp(value);
  }
  const handleIdentity = (value) =>{
    setIdentityNumberTmp(value);
  }
  const handlePhoneNumber = (value) =>{
    setPhoneNumberTmp(value);
  }
  const handleUpdateSubmit = () =>{
    fetch("/students/"+id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            identityNumber: identityNumberTmp,
            name: nameTmp,
            surname: surnameTmp,
            phoneNumber : phoneNumberTmp,
            cityName: city,
            townName: town
        }),
    })
    .then((res) => res.json()
    .catch((err) =>console.log(err)))
  
  }
  return (
    <Container fixed>
        <TextField
            id="standard-full-width"
            style={{ margin: 8 , textAlign: 'center'}}
            placeholder="Name"
            fullWidth
            onChange={(i) => handleName(i.target.value)}
            margin="normal"
            defaultValue={name}
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
            defaultValue={surname}
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
            defaultValue={identityNumber}
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
            defaultValue={phoneNumber}
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
            defaultValue={cityName}        
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
            defaultValue={townName}
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

          <Link className={classes.link} to="/"><Button onClick={handleUpdateSubmit} variant="contained">Update</Button></Link>
    </Container>
  )
}
