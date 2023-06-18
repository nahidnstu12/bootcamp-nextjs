import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ position: "fixed", bottom: "10px" }}
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Admin Layout
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
