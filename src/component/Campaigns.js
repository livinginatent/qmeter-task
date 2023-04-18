import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTable = styled(Table)``;
const SearchBar = styled(TextField)`
  margin-top: 5px;
`;

function createData(number, name, type, count, createdBy, date, action) {
  return { number, name, type, count, createdBy, date, action };
}

const rows = [
  createData(1, "Item 1", "Email", 5, "User 1", "2022-04-16", "Edit"),
  createData(2, "Item 2", "Phone", 3, "User 2", "2022-04-17", "Edit"),
  createData(3, "Item 3", "Address", 2, "User 3", "2022-04-18", "Edit"),
];

const Campaigns = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <TableContainer component={Paper}>
      <Stack direction="row" justifyContent="end">
        <SearchBar
          label="Search"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={handleSearchInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Created By</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell>{row.createdBy}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </TableContainer>
  );
};

export default Campaigns;
