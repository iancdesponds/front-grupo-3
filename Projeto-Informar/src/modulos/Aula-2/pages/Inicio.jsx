import React from "react";
import QuestionCard from "../../../components/QuestionCard";

function InicioAula2() {
  return (
    <div>
      <h1>Aula 2 - Início</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ullamcorper enim at nulla faucibus luctus. Quisque pulvinar augue non
        justo finibus cursus.
      </p>

      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription="Considere o código a seguir:"
        codeSnippet={`valor1 = 3
valor2 = 10
valor3 = 16
valor4 = 28

print(f"Os números sorteados foram: {valor2} {valor4} {valor3} {valor1}")`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "Os números sorteados foram: 3 10 16 28",
          "Os números sorteados foram: {valor2} {valor4} {valor3} {valor1}",
          "Os números sorteados foram: 1 16 10 28",
          "Os números sorteados foram: 10 28 16 3",
        ]}
        correctIndex={3} // "10 28 16 3" é a opção 3 (0-based)
        explanation="Será impresso a mensagem: 10 28 16 3. Como criamos uma f-string, as variáveis aparecem no lugar das chaves."
        localStorageKey="exercicio2"
      />

      {/* Você pode reutilizar o componente para outro exercício: */}
      <QuestionCard
        questionTitle="Exercício 3"
        questionDescription="Outro exemplo..."
        codeSnippet={`print("Hello World!")`}
        questionText="O que esse código faz?"
        options={[
          "Exibe Hello World! no terminal",
          "Encerra o programa",
          "Imprime a data atual",
          "Nada",
        ]}
        correctIndex={0}
        explanation="O print exibe o texto no terminal."
        localStorageKey="exercicio3"
      />
    </div>
  );
}

export default InicioAula2;
