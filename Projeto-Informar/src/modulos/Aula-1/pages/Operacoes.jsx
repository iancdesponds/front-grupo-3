import React from 'react';
import QuestionCard from '../../../components/QuestionCard';

function Operacoes() {
  return (
    <div>
      <h1>Aula 1 - Operações</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
        ullamcorper enim at nulla faucibus luctus. Quisque pulvinar augue non 
        justo finibus cursus.
      </p>
      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`x = 2 + 2 * 4
print(x)`}
        questionText="O que esse código imprime no terminal?"
        options={[
          "8",
          "16",
          "10",
          "12"
        ]}
        correctIndex={2}
        explanation="O programa faz primeiro a mulitplicação e depois a adição, resultando em 10."
        localStorageKey="exercicio1_operacoes"
      />
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription="Considere o seguinte código:"
        codeSnippet={``}
        questionText="O que esse código faz?"
        options={[
          "",
          "",
          "",
          ""
        ]}
        correctIndex={0}
        explanation=""
        localStorageKey="exercicio2_operacoes"
      />
      
      
    </div>
  );
}

export default Operacoes;

