import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  link: {
    textDecoration : "none",
    boxShadow : "none",
    color : "white",
    marginRight:5
  },
  
}));

export default function Navbar() {
    const classes = useStyles();
  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to={"/"}>Student Project Internship</Link>
          </Typography>
          <Link className={classes.link} to={"/findStudent"}><Button variant="contained"  color="secondary"> Find Student</Button></Link>
          <Link className={classes.link} to={"/add"}><Button variant="contained"  color="secondary"> Add Student</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    </div>
  )
}
