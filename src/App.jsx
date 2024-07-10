import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";

import { Outlet } from "react-router-dom";
import Header from "./components/common/header/Header.jsx";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1024px;
  background-color: white;

  * {
    border: 1px solid black;
  }
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
