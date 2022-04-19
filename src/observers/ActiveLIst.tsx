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
import { useTodosStore } from "../stores/TodoStore";
import { observer } from "mobx-react";

const ActiveList = observer(() => {
  const todosStore = useTodosStore();

  return (
    <>
      <StyledList>
        {todosStore.activeTodos.length
          ? todosStore.activeTodos.map(({ id, title, completed }) => {
              return (
                <ListItem key={id} disablePadding divider>
                  <ListItemButton>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={completed}
                        onClick={() => todosStore.toggle(id)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                    <IconButton
                      edge="end"
                      onClick={() => todosStore.remove(id)}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </ListItemButton>
                </ListItem>
              );
            })
          : null}
      </StyledList>
      <Button onClick={() => todosStore.completeAll()}>Complete All</Button>
    </>
  );
});

const StyledList = styled(List)`
  width: 100%;
`;

export default ActiveList;
