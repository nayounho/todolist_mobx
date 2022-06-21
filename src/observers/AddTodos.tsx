import { Button, Grid, TextField } from "@mui/material";

const AddTodos = () => {
  return (
    <Grid container>
      <TextField
        id="filled-basic"
        label="Todo List를 추가하세요!!"
        variant="filled"
      />
      <Button variant="contained">Add</Button>
    </Grid>
  );
};

export default AddTodos;
