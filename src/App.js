import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/themes";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTheme } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {
const [tema, setTema] = useState(true);

const toggleTema = () => {
  setTema((tema) => !tema)
}

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTheme onClick={toggleTema}>
        <SwitcherTheme tema={tema}/>
      </BtnTheme>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
