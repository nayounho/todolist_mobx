import { Grid } from "@mui/material";
import ActiveList from "./observers/ActiveList";
import AddTodos from "./observers/AddTodos";

function App() {
  return (
    <Grid>
      <Grid>
        <AddTodos />
      </Grid>
      <Grid>
        <ActiveList />
      </Grid>
      <Grid>
        <h1>completed item</h1>
      </Grid>
    </Grid>
  );
}

export default App;
