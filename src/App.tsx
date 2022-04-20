import {
  createTheme,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import AddTodos from "./observers/AddTodos";
import ActiveList from "./observers/ActiveLIst";
import CompletedList from "./observers/CompletedList";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AlignCenter>
        <GridContainer container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1">
              Todos with MobX
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <AddTodos />
          </Grid>
          <Grid item xs={6}>
            <ActiveList />
          </Grid>
          <Grid item xs={6}>
            <CompletedList />
          </Grid>
        </GridContainer>
      </AlignCenter>
    </ThemeProvider>
  );
}

const AlignCenter = styled(Paper)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled(Grid)`
  width: 500px;
`;

export default App;
