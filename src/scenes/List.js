import React, { useState } from "react";
import {
  createStyles,
  makeStyles,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import ResourceTable from "../components/ResourceTable";
import { Link } from "react-router-dom";
import { deletePortfolio } from "../actions/portfolioAction";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 3rem",
      height: "6rem",
      marginBottom: "0rem",
      boxSizing: "border-box",
    },
    button: {
      float: "right",
    }
  })
);
const ListPortfolios = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const linkForRecord = (record) => `/portfolios/${record.id}`;
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(false);
  const loading = useSelector((state) => state.allPortfolios.loading);

  const columns = [
    {
      id: "name",
      label: "Place Name",
      minWidth: 170,
      align: "right",
    },
    {
      id: "street",
      label: "Street",
      minWidth: 170,
      align: "right",
    },
    {
      id: "housenumber",
      label: "Number",
      minWidth: 170,
      align: "right",
      format: (value) => value,
    },
    {
      id: "postcode",
      label: "Postal code",
      minWidth: 170,
      align: "right",
      format: (value) => value,
    },
    {
      id: "city",
      label: "city",
      minWidth: 170,
      align: "right",
      format: (value) => value,
    },
    {
      id: "municipality",
      label: "municipality",
      minWidth: 170,
      align: "right",
      format: (value) => value,
    },
    {
      id: "country",
      label: "country",
      minWidth: 170,
      align: "right",
      format: (value) => value,
    },
    {
      id: "description",
      label: "description",
      minWidth: 170,
      align: "right",
      format: (value) => value,
    },
    {
      id: "coordinates",
      label: "coordinates",
      minWidth: 170,
      align: "right",
      render: (val) => val[0],
    },
  ];
  const handleCancel = () => {
    setConfirmDelete(false);
  };
  const handleConfirm = () => {
    dispatch(deletePortfolio(deleteId)).then((data) => {
      setConfirmDelete(false);
    });
  };

  const handleDelete = (id) => async () => {
    setConfirmDelete(true);
    setDeleteId(id);
  };

  return (
    <div>
      {}
      <div className={classes.buttonContainer}>
        <Typography variant="h6">Portfolio List</Typography>
        <div>
          {loading ? (
            <CircularProgress size={30} />
          ) : (
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              component={Link}
              to="/lists/portfolio/add"
              style={{ marginLeft: "0.8rem" }}
            >
              Add Portfolio
            </Button>
          )}
        </div>
      </div>
      <Dialog open={confirmDelete} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Are you Sure You Want To Delete the selected row{" "}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <ResourceTable
        handleDelete={handleDelete}
        edit={true}
        deleteRow={true}
        columns={columns}
        limit={40}
        getLinkForRecord={linkForRecord}
      />
    </div>
  );
};
export default ListPortfolios;
