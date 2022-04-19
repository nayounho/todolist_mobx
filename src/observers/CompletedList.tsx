import {
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { trace } from "mobx";
import { observer } from "mobx-react";
import { useTodosStore } from "../stores/TodoStore";

const CompletedList = observer(() => {
  trace();
  const todosStore = useTodosStore();

  return (
    <>
      <StyledList>
        {todosStore.completedTodos.length
          ? todosStore.completedTodos.map(({ id, title, completed }) => {
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
                  </ListItemButton>
                </ListItem>
              );
            })
          : null}
      </StyledList>
      <Button onClick={() => todosStore.removeCompleted()}>Remove All</Button>
    </>
  );
});

const StyledList = styled(List)`
  width: 100%;
`;

export default CompletedList;
