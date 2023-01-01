import React, { useEffect, useState } from 'react'
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


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#A8A8A8	",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
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

export default function Home() {
    const [error, setError] = useState(null);
    const [isloaded, setİsloaded] = useState(false);
    const [studentList, setStudentList] = useState([]);
    const classes = useStyles();

    const refreshStudents = () =>{
        fetch("/students")
        .then(res => res.json())
        .then(
            (result) =>{
                setİsloaded(true);
                setStudentList(result);
            },
            (error) =>{                                                 
                setİsloaded(true);
                setError(error);
            }
        )     
    }

    const deleteStudent =(id) =>{
        fetch("/students/"+id,{
          method:"DELETE",
        })
        .catch((err) => console.log(err))

        refreshStudents();
      }

      

    useEffect(() => {
        refreshStudents(studentList)
    }, [])
    if(error){
        return <div>Error</div>
    }
    else if(!isloaded){
        return <div> Loading..</div>
    }
    else{
        return(
            <Container fixed className={classes.container}>
            <TableContainer component={Paper}>
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
            {studentList.map((student) => (
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
                    <DeleteIcon />
                </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
        )     
    }

}
