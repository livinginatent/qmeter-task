import styled from "@emotion/styled";
import { Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MailThread = () => {
  const [threadName, setThreadName] = useState("");
  const [customerName, setCustomerName] = useState("Customer Name");
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  const FieldName = styled(Typography)`
    // Custom Typography to avoid styling repetitions
    font-weight: 700;
  `;
  const Field = styled(TextField)`
    // Custom TextField to avoid styling repetitions
    width: 750px;
  `;
  const asterisk = <span style={{ color: "red" }}>*</span>;

  return (
    <>
      <Container maxWidth={false}>
        <form onSubmit={handleSubmit}>
          <FieldName sx={{ fontWeight: "bold" }}>
            Thread Name{asterisk}
          </FieldName>
          <Field
            placeholder="Enter thread name"
            value={threadName}
            onChange={(event) => setThreadName(event.target.value)}
            required
          />
          <FieldName>From</FieldName>
          <Field
            sx={{
              backgroundColor: "#f8f4f4",
            }}
            disabled
            value="Qmeter or 2354"
          />
          <FieldName>If Customer Name Is Empty</FieldName>
          <Field  value={customerName} />
        </form>
      </Container>
    </>
  );
};

export default MailThread;
