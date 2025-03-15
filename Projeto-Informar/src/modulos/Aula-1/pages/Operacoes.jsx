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
        codeSnippet={`x = (2 + 2) * 4
print(x)`}
        questionText="O que esse código faz?"
        options={[
          "16",
          "10",
          "12",
          "9"
        ]}
        correctIndex={0}
        explanation="Dessa vez o programa faz a soma entre parênteses e depois faz a multiplicação."
        localStorageKey="exercicio2_operacoes"
      />
      
      
    </div>
  );
}

export default Operacoes;

