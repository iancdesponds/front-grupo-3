import React from 'react';
import CodeEditor from './CodeEditor';

function Ex_maximo() {
  return (
    <div>
      <h1>Exercício 1 - Função Área do Triangulo</h1>
      <p>
      Implemente a função calcula_area_triangulo que recebe a base e a altura de um triângulo e retorna a sua área. A fórmula para calcular a área de um triângulo é: Área = (base × altura) / 2.
      </p>
      <CodeEditor exerciseId={4}/>
    </div>
  );
}

export default Ex_maximo;
