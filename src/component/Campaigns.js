import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteCampaign,
  draftCampaign,
} from "../features/campaign/campaignSlice";

const CustomTable = styled(Table)``;
const SearchBar = styled(TextField)`
  margin-top: 5px;
  width: 525px;
`;

const Campaigns = () => {
  const [searchText, setSearchText] = useState("");
  const campaigns = useSelector((state) => state.campaign.campaigns);
  const [filteredCampaigns, setFilteredCampaigns] = useState(campaigns);

  // Update the filteredCampaigns array whenever the campaigns array changes
  useEffect(() => {
    setFilteredCampaigns(campaigns);
  }, [campaigns]);

  const dispatch = useDispatch();
  useEffect(() => {
    const drafts = JSON.parse(localStorage.getItem("drafts"));
    if (drafts) {
      drafts.forEach((element) => {
        dispatch(draftCampaign(element));
      });
      localStorage.removeItem("drafts");
    }
  }, [dispatch]);

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchText(inputValue);

    if (inputValue === "") {
      // Reset the sortedCampaigns to its original value
      setFilteredCampaigns(campaigns);
    } else {
      // Filter the campaigns based on the input value
      setTimeout(()=>{
const filteredCampaigns = campaigns.filter((campaign) =>
  campaign.threadName.toLowerCase().includes(inputValue)
);
setFilteredCampaigns(filteredCampaigns);
      },500)
      
    }
  };

  const [openNewThread, setOpenNewThread] = useState(false);
  const handleOpenNewThread = () => {
    setOpenNewThread(true);
  };
  const handleCloseNewThread = () => {
    setOpenNewThread(false);
  };

  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`view-campaign/${id}`);
  };

  const handleEdit = (id, type) => {
    if (type === "SMS") {
      navigate(`sms-edit/${id}`);
    } else {
      navigate(`email-edit/${id}`);
    }
  };
  const handleDelete = (id) => {
    dispatch(deleteCampaign(id));
    setFilteredCampaigns(
      filteredCampaigns.filter((campaign) => campaign.id !== id)
    );
  };

  return (
    <>
      {console.log(campaigns)}
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
              {filteredCampaigns.map((campaign, index) => (
                <TableRow key={campaign.id}>
                  <TableCell component="th" scope="campaign">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {campaign.isDraft ? (
                        <Typography
                          sx={{
                            paddingLeft:'5px',
                            paddingRight:'3px',
                            background: "#f7cac9",
                            width: "40px",
                            marginRight: "5px",
                          }}
                          color="error"
                        >
                          Draft
                        </Typography>
                      ) : null}
                      <Typography>{campaign.threadName}</Typography>
                    </div>
                  </TableCell>
                  <TableCell>{campaign.type}</TableCell>
                  <TableCell>{campaign.startSending}</TableCell>
                  <TableCell>
                    {campaign.isDraft ? (
                      <Button
                        sx={{
                          borderRadius: "0",
                          height: "40px",
                        }}
                        style={{ backgroundColor: "#fb9a00" }}
                        variant="contained"
                        onClick={() => handleEdit(campaign.id, campaign.type)}
                      >
                        Edit
                      </Button>
                    ) : (
                      <Button
                        sx={{
                          borderRadius: "0",
                          height: "40px",
                        }}
                        style={{ backgroundColor: "#fb9a00" }}
                        variant="contained"
                        onClick={() => handleView(campaign.id, campaign.type)}
                      >
                        View
                      </Button>
                    )}
                    <Button
                      sx={{
                        borderRadius: "0",
                        height: "40px",
                        marginLeft: "5px",
                      }}
                      style={{ backgroundColor: "#c70000" }}
                      variant="contained"
                      onClick={() => handleDelete(campaign.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
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
