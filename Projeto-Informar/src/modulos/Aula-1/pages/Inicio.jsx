import React from "react";
import NextPage from "../../../components/Next_page";

function InicioAula1() {
  return (
    <div>
      <h1>Aula 1 - Início</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ullamcorper enim at nulla faucibus luctus. Quisque pulvinar augue non
        justo finibus cursus.
      </p>
      <NextPage nomeDaPagina={'Operações'} link={'/aula-1/operacoes'} />
    </div>
  );
}

export default InicioAula1;
