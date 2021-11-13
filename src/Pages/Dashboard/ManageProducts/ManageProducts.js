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
import { Button, Container } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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

const ManageProducts = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch(`https://shielded-dawn-55052.herokuapp.com/cars`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, [products]);

  // delete order
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://shielded-dawn-55052.herokuapp.com/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Product deleted successfully");
          }
        });
    }
  };

  return (
    <Container>
      <h1>Total products: {products.length}</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <TableContainer component={Paper} className="table-container">
              <Table sx={{ minWidth: 700 }} aria-label="My products table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Car Brand</StyledTableCell>
                    <StyledTableCell align="center">Car Model</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>

                    <StyledTableCell align="center">
                      Delete Product
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell component="th" scope="row">
                        {row.brandName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.model}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        $ {row.price}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Button
                          variant="contained"
                          onClick={() => handleDeleteProduct(row._id)}
                        >
                          Delete Product
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ManageProducts;
