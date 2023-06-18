import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Footer() {
  return <Copyright />;
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ position: "fixed", bottom: "10px", textAlign: "center" }}
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Frontend Layout
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
