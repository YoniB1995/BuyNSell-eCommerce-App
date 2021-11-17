import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
const PermissionScreen = () => {
  const history = useHistory();
  const [code, setCode] = useState("");

  const newRoute = () => {
    history.push(`/adminpanel/${code}`);
  };
  return (
    <ScreenBody>
      <FormBody onSubmit={newRoute}>
        Type your permission code:
        <label for="code"></label>
        <input
          type="text"
          placeholder="type your access code..."
          onChange={(e) => setCode(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </FormBody>
    </ScreenBody>
  );
};

export default PermissionScreen;

const ScreenBody = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormBody = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
