import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Home() {
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
      >
        <ButtonGroup
          orientation="horizontal"
          size="large"
          variant="contained"
          color="primary"
          aria-label="text button group"
        >
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
        </ButtonGroup>
      </Box>
    </>
  );
}
