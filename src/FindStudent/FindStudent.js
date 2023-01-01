import { Button, TextField } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import { useState } from "react";

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#A8A8A8	",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    }
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: "theme.palette.action.hover",
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    
    table: {
      minWidth: 700,
            
    },
    container:{
        marginTop:20  
    }
    
  });
export default function FindStudent() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [identity, setIdentity] = useState("");
  const [city, setCity] = useState("");
  const [town, setTown] = useState("");
  const [isDisableName, setIsDisableName] =useState(false)
  const [isDisableSurname, setIsDisableSurname] =useState(false)
  const [isDisableIdentityNumber, setIsDisabledIdentityNumber] =useState(false)
  const [isDisablePhoneNumber, setIsDisabledPhoneNumber] =useState(false)
  const [isDisabledCity, setIsDisabledCity] =useState(false)
  const [isDisableTown, setIsDisabledTown] =useState(false)
  const [error, setError] = useState("")
  

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

  const handleName = (value) => {
    setName(value);
    setIsDisableSurname(true);
    setIsDisabledIdentityNumber(true);
    setIsDisabledPhoneNumber(true);
    setIsDisabledCity(true);
    setIsDisabledTown(true);
    if(value ===""){
        setIsDisableSurname(false);
        setIsDisabledIdentityNumber(false);
        setIsDisabledPhoneNumber(false);
        setIsDisabledCity(false);
        setIsDisabledTown(false);
    }
  };
  const handleSurname = (value) => {
    setSurname(value);
    setIsDisableName(true);
    setIsDisabledIdentityNumber(true);
    setIsDisabledPhoneNumber(true);
    setIsDisabledCity(true);
    setIsDisabledTown(true);
    if(value ===""){
        setIsDisableName(false);
        setIsDisabledIdentityNumber(false);
        setIsDisabledPhoneNumber(false);
        setIsDisabledCity(false);
        setIsDisabledTown(false);
    }
  };
  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
    setIsDisableName(true);
    setIsDisableSurname(true);
    setIsDisabledIdentityNumber(true);
    setIsDisabledCity(true);
    setIsDisabledTown(true);
    if(value ===""){
        setIsDisableName(false);
        setIsDisableSurname(false);
        setIsDisabledIdentityNumber(false);
        setIsDisabledCity(false);
        setIsDisabledTown(false);
    }
  };
  const handleIdentity = (value) => {
    setIdentity(value);
    setIsDisableName(true);
    setIsDisableSurname(true);
    setIsDisabledCity(true);
    setIsDisabledPhoneNumber(true);
    setIsDisabledTown(true);
    if(value ===""){
        setIsDisableName(false);
        setIsDisableSurname(false);
        setIsDisabledPhoneNumber(false);
        setIsDisabledCity(false);
        setIsDisabledTown(false);
    }
  };
  const handleCity = (event) =>{
    const selectedCity = event.target.value;
    setCity(selectedCity);
    setIsDisableName(true);
    setIsDisableSurname(true);
    setIsDisabledIdentityNumber(true);
    setIsDisabledPhoneNumber(true);
    setIsDisabledTown(true);

  }
  const handleTown = (event) =>{
    const selectedTown = event.target.value;
    setTown(selectedTown);
    setIsDisableName(true);
    setIsDisableSurname(true);
    setIsDisabledIdentityNumber(true);
    setIsDisabledPhoneNumber(true);
    setIsDisabledCity(true);
  }

  const handleFind =() => {
    if(!isDisableName){
            fetch("/students/name/"+name)
            .then(res => res.json())
            .then(
                (result) =>{
                    setStudents(result);
                },
                (error) =>{                                                 
                    console.log(error)
                }
            )     
    }
    else if(!isDisableSurname){
        fetch("/students/surname/"+surname)
            .then(res => res.json())
            .then(
                (result) =>{
                    setStudents(result);
                },
                (error) =>{                                                 
                    console.log(error)
                }
            )     
    }
    else if(!isDisableIdentityNumber){
        fetch("/students/identityNumber/"+identity)
            .then(res => res.json())
            .then(
                (result) =>{
                    setStudents([result]);
                },
                (error) =>{                                                 
                    console.log(error)
                }
            )     
    }
    else if(!isDisablePhoneNumber){
        fetch("/students/phoneNumber/"+phoneNumber)
            .then(res => res.json())
            .then(
                (result) =>{
                    setStudents([result]);
                },
                (error) =>{                                                 
                    console.log(error)
                }
            )     
    }
    else if(!isDisabledCity){
        fetch("/students/city/"+city)
            .then(res => res.json())
            .then(
                (result) =>{
                    setStudents(result);
                },
                (error) =>{                                                 
                    console.log(error)
                }
            )     
    }
    else if(!isDisableTown){
        fetch("/students/town/"+town)
            .then(res => res.json())
            .then(
                (result) =>{
                    setStudents(result);
                },
                (error) =>{                                                 
                    console.log(error)
                }
            )     
    }
  }

  const deleteStudent =(id) =>{
    fetch("/students/"+id,{
      method:"DELETE",
    })
    .catch((err) => console.log(err))

  }
  const classes = useStyles();

  return (
    <Container fixed>
      <TextField
        id="standard-full-width"
        style={{ margin: 8, textAlign: "center" }}
        placeholder="Name"
        fullWidth
        onChange={(i) => handleName(i.target.value)}
        disabled = {isDisableName}
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
        disabled = {isDisableSurname}
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
        disabled= {isDisableIdentityNumber}
        onChange={(i) => handleIdentity(i.target.value)}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-full-width"
        style={{ margin: 8, textAlign: "center" }}
        placeholder="Phone Number"
        fullWidth
        disabled = {isDisablePhoneNumber}
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
        disabled ={isDisabledCity}
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
        disabled = {isDisableTown}
        label="Select Town"
        onChange={handleTown}
        fullWidth
        align='left'    
        InputLabelProps={{
          shrink: true,
        }}
      >
        {towns.map((item) => (
          <option key={item.value} value={item.text}>
            {item.text}
          </option>
        ))}
      </TextField>
    
      <Button  variant="contained" onClick={handleFind}>Find</Button>
      {students.length >0 && (
        <TableContainer className={classes.button} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='left'>Name</StyledTableCell>
              <StyledTableCell align='left'>Surname</StyledTableCell>
              <StyledTableCell align="right">Identity Number</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">City</StyledTableCell>
              <StyledTableCell align="right">Town</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <StyledTableRow key={student.identityNumber}>
                <StyledTableCell  align="left">{student.name}</StyledTableCell>
                <StyledTableCell  align="left">{student.surname}</StyledTableCell>
                <StyledTableCell  align="right">{student.identityNumber}</StyledTableCell>
                <StyledTableCell  align="right">{student.phoneNumber}</StyledTableCell>
                <StyledTableCell  align="right">{student.cityName}</StyledTableCell>
                <StyledTableCell  align="right">{student.townName}</StyledTableCell>
                <StyledTableCell  align="right">
                <IconButton aria-label="delete">
                    <Link to='/update' state={{id: student.id, name: student.name, surname: student.surname,
                    identityNumber: student.identityNumber, phoneNumber: student.phoneNumber, cityName: student.cityName, townName: student.townName, cityId:student.cityId, townId: student.townId }}><EditIcon /></Link>
                </IconButton>
                </StyledTableCell>
                <StyledTableCell  align="right">
                <IconButton aria-label="delete" 
                onClick={() =>(deleteStudent(student.id))}
                color='secondary'>
                    <Link to="/"><DeleteIcon /></Link>
                </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )}
    </Container>
  );
}
