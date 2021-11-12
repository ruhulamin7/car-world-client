import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  // delete order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order deleted successfully");
          }
        });
    }
  };

  // update order
  const handleUpdateStatus = (id) => {
    axios
      .put(`http://localhost:5000/orders/${id}`, { status: "Approved" })
      .then((res) => {
        console.log(res);
        if (res.data.matchedCount > 0) {
          alert("Order Approved Successfully !");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Total orders: {orders.length}</h1>
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 700 }} aria-label="My orders table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Car Brand</StyledTableCell>
              <StyledTableCell align="center">Car Model</StyledTableCell>
              <StyledTableCell align="center">Order Status</StyledTableCell>
              <StyledTableCell align="center">Cancel/Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.brandName}
                </StyledTableCell>
                <StyledTableCell align="center">{row.model}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleUpdateStatus(row._id)}
                  >
                    {row.status}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteOrder(row._id)}
                  >
                    Cancel Order
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageOrders;
