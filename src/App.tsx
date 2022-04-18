import { Box } from "@mui/material";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function App() {
  return (
    <AlignCenter>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
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

export default App;
