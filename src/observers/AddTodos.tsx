import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const AddTodos = () => {
  const [todo, setTodo] = useState("");

  return (
    <Stack direction="row" spacing={2} component="form">
      <TextField
        fullWidth
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        label="Add your todo."
      />
      <Button
        variant="contained"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log(todo);
        }}
      >
        ADD
      </Button>
    </Stack>
  );
};

export default AddTodos;
