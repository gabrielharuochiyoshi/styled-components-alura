import React, { useState } from "react";
import styled from "styled-components";

import Private from "../../assets/images/privado.svg";
import EyeIcon from "../../assets/images/olho.svg";
import Money from "../../assets/images/dinheiro.svg";
import { Icone, Box, Saldo, Detail, Botao } from "../UI";

const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

const SaldoFontPadding = styled(Saldo)`
  fontsize: "26px";
  padding: "20px 0";
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <SaldoFontPadding>
        Saldo disponível{" "}
        <span>
          <Icone src={Money} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detail>R$</Detail> 0,00{" "}
          </Saldo>
        ) : (
          <Saldo>
            <Detail>R$ ----</Detail>
          </Saldo>
        )}
      </SaldoFontPadding>

      <Botao onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? Private : EyeIcon}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
