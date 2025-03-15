import React from 'react';
import QuestionCard from '../../../components/QuestionCard';

function Condicionais() {
  return (
    <div>
      <h1>Aula 2 - Condicionais</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
        ullamcorper enim at nulla faucibus luctus. Quisque pulvinar augue non 
        justo finibus cursus.
      </p>

      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription="Considere o código a seguir:"
        codeSnippet={`x = 12
   if x < 10:
       print('O numero é menor que 10.')
   else:
       print('O número é maior que 10.')`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "O número é maior que 10.",
          "O número é menor que 10.",
          "12",
          "Não será impresso nada no terminal."
        ]}
        correctIndex={0} // "O número é maior que 10." é a opção 1 (0-based)
        explanation="Será impresso a mensagem: O número é maior que 10. Como 12 é maior que 10, ele entra no primeiro if."
        localStorageKey="exercicio1"
      />

      {/* Você pode reutilizar o componente para outro exercício: */}
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription="Outro exemplo..."
        codeSnippet={`a = 5
   b = 3
   c = a + b
   if c > 10:
       print(b)
   else:
       print(c)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "Não será impresso nada no terminal.",
          "5",
          "3",
          "8"
        ]}
        correctIndex={3}
        explanation="Já que C é menor que 10, será impresso C no terminal, que é o número 8."
        localStorageKey="exercicio2"
      />
      <QuestionCard
        questionTitle="Exercício 3"
        questionDescription="Considere o código a seguir:"
        codeSnippet={`idade = 14
   if idade < 12:
       print('criança')
   elif idade < 20:
       print('adolescente')
   elif idade < 60:
       print('adulto')
   else:
       print('idoso')`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "criança",
          "adolescente",
          "adulto",
          "idoso"
        ]}
        correctIndex={1}
        explanation="Como a idade informada é maior que 12, ela não entra no primeiro if, e como é menor que 20, entra no segundo. Assim, a mensagem impressa será: Adolescente."
        localStorageKey="exercicio3"
      />
      <QuestionCard
        questionTitle="Exercício 4"
        questionDescription="Considere o código a seguir:"
        codeSnippet={`subtraindo = False
   a = 10
   b = 4
   c = a - b
   if subtraindo:
       print(c)
`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "6",
          "4",
          "Não será impresso nada no terminal.",
          "14"
        ]}
        correctIndex={2}
        explanation="Como a função subtraindo = False, a função não será exercutada. Ou seja, nada será impresso. "
        localStorageKey="exercicio4"
      />      

      <QuestionCard
        questionTitle="Exercício 5"
        questionDescription="Considere o código a seguir:"
        codeSnippet={`a = 1
   b = 2
   c = 3
   if a + c > 4:
       print(b + c)
   else:
       print(c - b)
`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "1",
          "5",
          "Não será impresso nada no terminal.",
          "4"
        ]}
        correctIndex={0}
        explanation="Como a + b = 4, o caso não entrará no primeiro if, e sim no else. Por isso, será impresso 1."
        localStorageKey="exercicio5"
      />
    </div>
  );
}

export default Condicionais;
