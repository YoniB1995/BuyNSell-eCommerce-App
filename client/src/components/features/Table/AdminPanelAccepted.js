import React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../pages/AdminPanel.css'
import {HEROKU_API,LOCAL_API} from '../../../service/api-service'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function AdminPanelAccepted({type}) {
    const [contacts,setContacts] = useState([]);
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch(`${HEROKU_API}/user`)
        .then(res=> res.json())
        .then(data=> setUsers(data.data))
    },[])

    useEffect(()=>{
        fetch(`${HEROKU_API}/contactus`)
        .then(res=> res.json())
        .then(data=> setContacts(data.Contacts))
    },[])
  return (
      <div className="table-body-page">
          {type === "usersDB" ?
          
           <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table" style={{width:"100%"}}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Email </StyledTableCell>
            <StyledTableCell align="left">Password</StyledTableCell>
            <StyledTableCell align="left">Created</StyledTableCell>
            <StyledTableCell align="left">Manage</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {user.email}
              </StyledTableCell>
              <StyledTableCell>{user.password}</StyledTableCell>
              <StyledTableCell align="left">{user.createdAt}</StyledTableCell>
              <StyledTableCell align="right" >
                <button className="btn-approve" style={{background:"red"}}>Delete</button>
                <button className="btn-approve" >Update</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
          
          : 
           <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table" style={{width:"100%"}}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Email </StyledTableCell>
            <StyledTableCell align="left">Text</StyledTableCell>
            <StyledTableCell align="left">Subject</StyledTableCell>
            <StyledTableCell align="left">Approved</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((user,i) => (
            user.isApproved === true && 
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {user.email}
              </StyledTableCell>
              <StyledTableCell>{user.subject}</StyledTableCell>
              <StyledTableCell align="left">{user.text}</StyledTableCell>
              <StyledTableCell align="right" ><button className="btn-approve" style={{background:"green"}}>Approved</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
          }
   
    </div>
  );
}