import { Grid } from "@mui/material";
import styled from "@emotion/styled";

function App() {
  return (
    <AlignCenter>
      <GridContainer container spacing={2}>
        <Grid item xs={12}>
          1
        </Grid>
        <Grid item xs={6}>
          2
        </Grid>
        <Grid item xs={6}>
          3
        </Grid>
      </GridContainer>
    </AlignCenter>
  );
}

const AlignCenter = styled.div`
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
