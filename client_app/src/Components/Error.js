import { Alert, AlertTitle } from "@mui/material";
import React from "react";

function Error({ error }) {
  return (
    <div className="Error w-auto">
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error} — <strong>check it out!</strong>
      </Alert>
    </div>
  );
}

export default Error;
