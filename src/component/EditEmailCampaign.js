import styled from "@emotion/styled";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Divider,
  Button,
  Autocomplete,
  Chip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ConfirmationModal from "./ConfirmationModal";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Field = styled(TextField)`
  // Custom TextField to avoid styling repetitions
  width: 100%;
`;
const FieldName = styled(Typography)`
  // Custom Typography to avoid styling repetitions
  font-weight: 700;
`;

const asterisk = <span style={{ color: "red" }}>*</span>;

const EditEmailCampaign = () => {
  const fromComponent = "EditEmailCampaign";
  const { id } = useParams();
  const campaigns = useSelector((state) => state.campaign.campaigns);
  const campaign = campaigns.find((c) => c.id === parseInt(id));
  const [formData, setFormData] = useState({
    type: "Email",
    id: campaign.id,
    dateCreated: campaign.dateCreated,
    threadName: campaign.threadName,
    from: "Qmeter or 2354",
    customerName: campaign.customerName,
    subject: campaign.subject,
    dropdownOption: "QNP-102 Template",
    to: campaign.to,
    startSending: campaign.startSending,
    editorContent: campaign.editorContent,
  });

  const {
    threadName,
    from,
    customerName,
    subject,
    dropdownOption,
    startSending,
    editorContent,
  } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Update the editorContent state variable when the user types into the editor
  const onEditorChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      editorContent: value,
    }));
  };

  const [emailList, setEmailList] = useState([
    { title: "customer1@example.com", group: "Customers" },
    { title: "customer2@example.com", group: "Customers" },
  ]);

  const [selectedEmails, setSelectedEmails] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const onEmailKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Check if the email already exists in the selected emails array
      const emailExists = selectedEmails.some(
        (email) => email.title === newEmail
      );
      if (!emailExists) {
        const newEmailList = [
          ...emailList,
          { title: newEmail, group: "Receivers" },
        ];
        setEmailList(newEmailList);
        const newSelectedEmails = [
          ...selectedEmails,
          { title: newEmail, group: "Receivers" },
        ];
        setSelectedEmails(newSelectedEmails);
        setNewEmail("");

        // Clear the input field after adding the new email
      }
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.threadName.trim() === "" ||
      formData.to.length === 0 ||
      formData.startSending.trim() === ""
    ) {
      alert("Please fill in all required fields.");
      handleCloseModal();
      return;
    }
    openModal();
  };

  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
      <Grid sx={{ backgroundColor: "white" }} container spacing={2}>
        <Grid item xs={8}>
          <Container
            component="form"
            onSubmit={handleSubmit}
            sx={{ backgroundColor: "white" }}
            maxWidth={false}
          >
            <Container noValidate maxWidth={false}>
              <CssBaseline />
              <Box>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <FieldName>Thread Name{asterisk}</FieldName>
                    <Field
                      placeholder="Enter thread name"
                      name="threadName"
                      required
                      value={threadName}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldName>Template</FieldName>

                    <Field
                      select
                      value={dropdownOption}
                      placeholder="Enter subject here"
                      onChange={onChange}
                      single="true"
                    >
                      <MenuItem value={dropdownOption}>
                        QNP-102 Template
                      </MenuItem>
                    </Field>
                  </Grid>

                  <Grid item xs={6}>
                    <FieldName>From</FieldName>
                    <Field
                      sx={{
                        backgroundColor: "#f8f4f4",
                      }}
                      disabled
                      value={from}
                      name="from"
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldName>To{asterisk}</FieldName>
                    <Autocomplete
                      required={true}
                      multiple
                      id="tags-filled"
                      options={[{ title: "Choose All" }, ...emailList]}
                      groupBy={(option) => option.group}
                      getOptionLabel={(option) => option.title}
                      freeSolo
                      value={selectedEmails}
                      onChange={(event, newValue) => {
                        if (
                          newValue &&
                          newValue.find(
                            (option) => option.title === "Choose All"
                          )
                        ) {
                          setSelectedEmails(emailList);
                        } else {
                          setSelectedEmails(newValue);
                        }
                        setFormData((prevState) => ({
                          ...prevState,
                          to: emailList.map((email) => email.title),
                        }));
                      }}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => {
                          const label = option.title || option;

                          return (
                            <Chip
                              variant="outlined"
                              label={label}
                              {...getTagProps({ index })}
                            />
                          );
                        })
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          value={selectedEmails}
                          InputProps={{
                            ...params.InputProps,
                            required: selectedEmails.length === 0,
                          }}
                          onChange={(e) => setNewEmail(e.target.value)}
                          onKeyDown={onEmailKeyDown}
                          {...params}
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldName>If Customer name is empty</FieldName>
                    <Field
                      name="customerName"
                      value={customerName}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldName>Start Sending {asterisk}</FieldName>
                    <Field
                      name="startSending"
                      value={startSending}
                      type="date"
                      placeholder="Select date"
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FieldName>Subject</FieldName>
                    <Field
                      name="subject"
                      value={subject}
                      placeholder="Enter subject here"
                      onChange={onChange}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ mt: "10px", mb: "10px" }} />
              <ReactQuill
                style={{ height: "20vh" }}
                value={editorContent}
                onChange={onEditorChange}
              />

              <Container
                sx={{ display: "flex", justifyContent: "flex-end" }}
                maxWidth={false}
              >
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#6ac17a",
                    borderRadius: "0",
                    height: "40px",
                  }}
                  variant="contained"
                >
                  SEND
                </Button>

                <ConfirmationModal
                  open={isModalOpen}
                  id={campaign.id}
                  handleClose={handleCloseModal}
                  type={formData.type}
                  confirm={handleConfirm}
                  formData={formData}
                  fromComponent={fromComponent}
                />
              </Container>
              <Button
                onClick={handleBack}
                style={{
                  backgroundColor: "#6ac17a",
                  borderRadius: "0",
                  height: "40px",
                  marginTop: "5px",
                }}
                variant="contained"
              >
                Go Back
              </Button>
            </Container>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontWeight: "700" }}>Sending Info</Typography>
          <Container sx={{ textAlign: "center" }}>
            <Divider sx={{ mt: "10px", mb: "10px" }} />
            <EmailIcon sx={{ fontSize: "3rem" }} />
            <Typography variant="h4" sx={{ mb: "5px" }}>
              0
            </Typography>
            <Typography>Total email count</Typography>
            <Divider sx={{ mt: "10px", mb: "10px" }} />
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Customer count
              <Typography sx={{ fontWeight: "700", ml: "10px" }}>0</Typography>
            </Typography>
            <Divider sx={{ mt: "10px", mb: "10px" }} />
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Feedback balance
              <Typography sx={{ fontWeight: "700", ml: "10px" }}>0</Typography>
            </Typography>
            <Divider sx={{ mt: "10px", mb: "10px" }} />
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default EditEmailCampaign;
