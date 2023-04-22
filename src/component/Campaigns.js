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
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailOrSms from "./EmailOrSms";
import { useSelector } from "react-redux";

const CustomTable = styled(Table)``;
const SearchBar = styled(TextField)`
  margin-top: 5px;
  width: 525px;
`;

const Campaigns = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const [openNewThread, setOpenNewThread] = useState(false);
  const handleOpenNewThread = () => {
    setOpenNewThread(true);
  };
  const handleCloseNewThread = () => {
    setOpenNewThread(false);
  };

  const campaigns = useSelector((state) => state.campaign.campaigns);
  return (
    <>
      <Container sx={{ display: "flex" }} maxWidth={false}>
        <div>
          <Typography variant="h6">Campaigns</Typography>
          <Typography fontStyle="italic" fontSize={12}>
            You can communicate with your customers directly from this section
          </Typography>
        </div>
        <Button
          style={{
            backgroundColor: "#6ac17a",
            borderRadius: "0",
            height: "40px",
          }}
          variant="contained"
          sx={{ marginLeft: "auto" }}
          onClick={handleOpenNewThread}
        >
          NEW THREAD
        </Button>
        <EmailOrSms open={openNewThread} handleClose={handleCloseNewThread} />
      </Container>

      <Container sx={{ border: 5, borderColor: "#f8f4f4" }} maxWidth={false}>
        <TableContainer component={Paper}>
          <Stack direction="row" justifyContent="end">
            <SearchBar
              variant="outlined"
              size="small"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
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
                <TableCell>Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell component="th" scope="campaign">
                    {campaign.id}
                  </TableCell>
                  <TableCell>{campaign.threadName}</TableCell>
                  <TableCell>{campaign.type}</TableCell>
                  <TableCell>{campaign.startSending}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </CustomTable>
        </TableContainer>
      </Container>
    </>
  );
};

export default Campaigns;
