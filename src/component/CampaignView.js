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
  Autocomplete,
  Chip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const Field = styled(TextField)`
  // Custom TextField to avoid styling repetitions
  width: 100%;
`;
const FieldName = styled(Typography)`
  // Custom Typography to avoid styling repetitions
  font-weight: 700;
`;

const asterisk = <span style={{ color: "red" }}>*</span>;

const CampaignView = () => {
  const { id } = useParams();
  const campaign = useSelector((state) =>
    state.campaign.campaigns.find((c) => c.id === parseInt(id))
  );

  return (
    <>
      {campaign.type === "Email" ? (
        <Grid sx={{ backgroundColor: "white" }} container spacing={2}>
          <Grid item xs={8}>
            <Container
              component="form"
              sx={{ backgroundColor: "white" }}
              noValidate
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
                        disabled
                        placeholder="Enter thread name"
                        name="threadName"
                        required
                        value={campaign.threadName}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldName>Template</FieldName>

                      <Field
                        label={campaign.dropdownOption}
                        disabled
                        select
                        single="true"
                      >
                        <MenuItem>QNP-102 Template</MenuItem>
                      </Field>
                    </Grid>

                    <Grid item xs={6}>
                      <FieldName>From</FieldName>
                      <Field
                        sx={{
                          backgroundColor: "#f8f4f4",
                        }}
                        disabled
                        value={campaign.dropdownOption}
                        name="from"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldName>To{asterisk}</FieldName>
                      <Autocomplete
                        disabled={true}
                        value={campaign.to}
                        multiple
                        id="tags-filled"
                        options={[campaign.to]}
                        groupBy={(option) => option.group}
                        getOptionLabel={(option) => option.title}
                        freeSolo
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
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldName>If Customer name is empty</FieldName>
                      <Field
                        disabled
                        name="customerName"
                        value={campaign.customerName}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldName>Start Sending {asterisk}</FieldName>
                      <Field
                        disabled
                        name="startSending"
                        value={campaign.startSending}
                        type="date"
                        placeholder="Select date"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldName>Subject</FieldName>
                      <Field
                        disabled
                        name="subject"
                        value={campaign.subject}
                        placeholder="Enter subject here"
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Divider sx={{ mt: "10px", mb: "10px" }} />
                <ReactQuill
                  readOnly
                  style={{ height: "20vh" }}
                  value={campaign.editorContent}
                />
                <Container
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  maxWidth={false}
                ></Container>
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
                <Typography sx={{ fontWeight: "700", ml: "10px" }}>
                  0
                </Typography>
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
                <Typography sx={{ fontWeight: "700", ml: "10px" }}>
                  0
                </Typography>
              </Typography>
              <Divider sx={{ mt: "10px", mb: "10px" }} />
            </Container>
          </Grid>
        </Grid>
      ) : (
        <Grid sx={{ backgroundColor: "white" }} container spacing={2}>
          <Grid item xs={8}>
            <Container
              component="form"
              sx={{ backgroundColor: "white" }}
              noValidate
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
                        disabled
                        placeholder="Enter thread name"
                        name="threadName"
                        required
                        value={campaign.threadName}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldName>Template</FieldName>

                      <Field
                        label={campaign.dropdownOption}
                        disabled
                        select
                        single="true"
                      >
                        <MenuItem>QNP-102 Template</MenuItem>
                      </Field>
                    </Grid>

                    <Grid item xs={6}>
                      <FieldName>From</FieldName>
                      <Field
                        sx={{
                          backgroundColor: "#f8f4f4",
                        }}
                        disabled
                        value={campaign.dropdownOption}
                        name="from"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldName>To{asterisk}</FieldName>
                      <Autocomplete
                        disabled={true}
                        value={campaign.to}
                        multiple
                        id="tags-filled"
                        options={[campaign.to]}
                        groupBy={(option) => option.group}
                        getOptionLabel={(option) => option.title}
                        freeSolo
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
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldName>If Customer name is empty</FieldName>
                      <Field
                        disabled
                        name="customerName"
                        value={campaign.customerName}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FieldName>Start Sending {asterisk}</FieldName>
                      <Field
                        disabled
                        name="startSending"
                        value={campaign.startSending}
                        type="date"
                        placeholder="Select date"
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Divider sx={{ mt: "10px", mb: "10px" }} />
                <ReactQuill
                  readOnly
                  style={{ height: "20vh" }}
                  value={campaign.editorContent}
                />
                <Container
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  maxWidth={false}
                ></Container>
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
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                SMS balance
                <Typography sx={{ fontWeight: "700", ml: "10px" }}>
                  {campaign.smsCount}
                </Typography>
              </Typography>
              <Divider sx={{ mt: "10px", mb: "10px" }} />
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Customer count
                <Typography sx={{ fontWeight: "700", ml: "10px" }}>
                  0
                </Typography>
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
                <Typography sx={{ fontWeight: "700", ml: "10px" }}>
                  0
                </Typography>
              </Typography>
              <Divider sx={{ mt: "10px", mb: "10px" }} />

              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Total price
                <Typography sx={{ fontWeight: "700", ml: "10px" }}>
                  0
                </Typography>
              </Typography>
              <Divider sx={{ mt: "10px", mb: "10px" }} />
            </Container>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CampaignView;
