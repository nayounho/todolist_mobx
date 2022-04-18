import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

const CompletedList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos([{ id: "123123", title: "completed todo 1", completed: false }]);
  }, []);

  return (
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
                </ListItemButton>
              </ListItem>
            );
          })
        : null}
    </StyledList>
  );
};

const StyledList = styled(List)`
  width: 100%;
`;

export default CompletedList;
