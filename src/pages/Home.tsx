import { Box, Container, CssBaseline, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
        >
          This will be the home page
        </Typography>
      </Box>
    </Container>
  );
};

export { Home };
