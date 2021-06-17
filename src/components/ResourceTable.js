import React from "react";
import { makeStyles, withStyles, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width:'98%',
    margin: "0 6rem 0 1rem",
  },
  container: {
    maxHeight: 440,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    textTransform:'uppercase' ,
    backgroundColor: '#1976d2',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
export default function ResourceTable({
  columns,
  edit,
  deleteRow,
  handleDelete,
}) {
  const {portfolios} = useSelector((state) => state.allPortfolios);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </StyledTableCell>
              ))}
              {edit && <StyledTableCell></StyledTableCell>}
              {deleteRow && <StyledTableCell></StyledTableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {portfolios
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                      );
                    })}
                    <>
                      {edit && (
                        <TableCell padding="checkbox">
                          <Button
                          color="default"
                            component={Link}
                            to={`/lists/${row.id}/edit`}
                          >
                            <EditIcon />
                          </Button>
                        </TableCell>
                      )}
                      {deleteRow && (
                        <TableCell padding="checkbox">
                          <Button
                            color="default"
                            onClick={handleDelete(row.id)}
                          >
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                      )}
                    </>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={portfolios.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
