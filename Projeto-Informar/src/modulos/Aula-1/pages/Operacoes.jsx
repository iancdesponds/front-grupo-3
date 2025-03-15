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
        codeSnippet={`x = 12
if x < 10:
    print('O numero é menor que 10.')
else:
    print('O número é maior ou igual a 10.')`}
        questionText="O que esse código imprime no terminal?"
        options={[
          "O número é maior ou igual a 10.",
          "O número é menor que 10.",
          "12",
          "Não será impresso nada no terminal."
        ]}
        correctIndex={0}
        explanation="O código checa se x é menor que 10 quando passa pelo if, como x é maior que 10, ele acaba imprimindo a outra linha."
        localStorageKey="exercicio1_operacoes"
      />
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`a = 5
b = 3
c = a + b
if c > 10:
    print(b)
else:
    print(c)`}
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

