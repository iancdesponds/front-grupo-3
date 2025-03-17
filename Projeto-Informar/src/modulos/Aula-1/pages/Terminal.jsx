import React from "react";
import NextPage from "../../../components/Next_page";

function Terminal() {
  return (
    <div>
      <h1>Aula 1 - Terminal</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ullamcorper enim at nulla faucibus luctus. Quisque pulvinar augue non
        justo finibus cursus.
      </p>
      <NextPage nomeDaPagina={'Aula - 2'} link={'/aula-2/inicio'}/>
    </div>
  );
}

export default Terminal;
