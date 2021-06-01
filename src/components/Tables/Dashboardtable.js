import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch } from 'react-redux'
import TablePagination from '@material-ui/core/TablePagination';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import  { EditJobFormState, ProjectID, SetFormStateData }  from '../../redux/Actions/dialogs'

const StyledTableCell = withStyles((theme) => ({
 
  head: { 
    color: theme.palette.common.black,
  },
  body: {
    
  },
}))(TableCell);




const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createColor(row) {

 return  { borderRadius: 20, backgroundColor: (row.job_status === "In Progress") ? "#32E82A" : (row.job_status === "Completed") ? "#FF453A" : '#FFD60A', padding: 6 };
}


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  small: {
    width: 1,
    height: 1,
    marginLeft: 15,
  },
  
}));

export default function DashboardTable() {
  const projects = useSelector(state => state.jobs.jobs)
  const filterstatus = projects.filter(row => row.job_status === 'In Progress');
  const search_projects = useSelector(state => state.search.search_projects)
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleEditOpen = (id) => {
    dispatch(ProjectID(id))
    dispatch(SetFormStateData())
    dispatch(EditJobFormState(true))
  };

 
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell >Status</StyledTableCell>
          <StyledTableCell >Project Name</StyledTableCell>
            <StyledTableCell >Job Value</StyledTableCell>
            <StyledTableCell >Company Name</StyledTableCell>
            <StyledTableCell >Due Date</StyledTableCell>
            <StyledTableCell >Employee Name</StyledTableCell>
            <StyledTableCell >Actions</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {filterstatus
          .filter(row => row.job_name.toLowerCase().includes(search_projects))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <StyledTableRow key={row.id}>

            
              <StyledTableCell style={{color: "black", }}><Avatar  className={classes.small} style={createColor(row)}><Paper/></Avatar></StyledTableCell>
              <StyledTableCell component="th" scope="row">
              
                {row.job_name}

              </StyledTableCell>

              <StyledTableCell >{row.job_value}</StyledTableCell>
              <StyledTableCell >{row.company_name}</StyledTableCell>
              <StyledTableCell >{row.job_due_date}</StyledTableCell>
              <StyledTableCell >{row.employee_name}</StyledTableCell>
              <StyledTableCell ><IconButton style={{padding: 0}} onClick={() => handleEditOpen(row.id)} >
                    <EditIcon  />
                    </IconButton></StyledTableCell>
              

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
                          rowsPerPageOptions={[5, 10, 25]}
                          component="div"
                          count={filterstatus.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onChangePage={handleChangePage}
                          onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
    </TableContainer>
  );
}
