import { Outlet, Link } from "react-router-dom";
import "./Nav.syles.scss";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function Navegation() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
        className="bg-blue-900"
      >
        <ButtonGroup
          orientation="horizontal"
          size="large"
          variant="contained"
          color="primary"
          aria-label="text button group"
        >
          <Link className="bg-black" to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </ButtonGroup>
      </Box>
      <Outlet />
    </>
  );
}
