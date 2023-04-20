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
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Field = styled(TextField)`
  // Custom TextField to avoid styling repetitions
  width: 100%;
`;
const FieldName = styled(Typography)`
  // Custom Typography to avoid styling repetitions
  font-weight: 700;
`;

const asterisk = <span style={{ color: "red" }}>*</span>;

const MailThread = () => {
  const [formData, setFormData] = useState({
    threadName: "",
    from: "Qmeter or 2354",
    customerName: "",
    subject: "",
    dropdownOption: "QNP-102 Template",
    to: [],
    startSending: new Date(),
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

  const onSubmit = (e) => {
    e.preventDefault();
    // Submit the formData object, including the editor content
    console.log(formData);
  };

  /* const emailList = [
  { title: "customer1@example.com", group: "Customers" },
  { title: "customer2@example.com", group: "Customers" },
  
]; */

 /*  const [emailList, setEmailList] = useState([
    { title: "customer1@example.com", group: "Customers" },
    { title: "customer2@example.com", group: "Customers" },
    { title: "customer2@example.com", group: "Receivers" },
    { title: "customer2@example.com", group: "Receivers" },
  ]);
 */
  const emailList = [
    { title: "customer1@example.com", group: "Customers" },
    { title: "customer2@example.com", group: "Customers" },
    { title: "wedexample.com", group: "Receivers" },
    { title: "wdf@example.com", group: "Receivers" },
  ];

  return (
    <>
      <Container
        component="form"
        noValidate
        onSubmit={onSubmit}
        maxWidth={false}
      >
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
                <MenuItem value={dropdownOption}>QNP-102 Template</MenuItem>
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
                multiple
                id="tags-filled"
                options={emailList.map((option) => option.title)}
                groupBy={(option) => option.group}
                defaultValue={[emailList[0].title]}
                freeSolo
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
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
        </Container>
      </Container>
      <Container></Container>
    </>
  );
};

export default MailThread;
