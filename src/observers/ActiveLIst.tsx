import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Button,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useEffect, useState } from "react";

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

const ActiveList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos([{ id: "123123", title: "todo 1", completed: false }]);
  }, []);

  return (
    <>
      <StyledList>
        {todos.length
          ? todos.map(({ id, title, completed }) => {
              return (
                <ListItem key={id} disablePadding divider>
                  <ListItemButton>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={completed}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                    <IconButton edge="end" aria-label="comments">
                      <DeleteOutlineIcon />
                    </IconButton>
                  </ListItemButton>
                </ListItem>
              );
            })
          : null}
      </StyledList>
      <Button>Remove All</Button>
    </>
  );
};

const StyledList = styled(List)`
  width: 100%;
`;

export default ActiveList;
