import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const dummyData = [
  { id: 1, content: "Drogbar", check: false },
  { id: 2, content: "Son", check: true },
  { id: 3, content: "Messi", check: true },
];

const ActiveList = () => {
  return (
    <List>
      {dummyData.map((li) => {
        return (
          <ListItem key={li.id} disablePadding>
            <ListItemButton>
              <Checkbox />
            </ListItemButton>
            <ListItemText primary={li.content} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ActiveList;
