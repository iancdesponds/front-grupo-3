import React, { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = ({ exerciseId }) => {
  const [code, setCode] = useState("");
  const [testResults, setTestResults] = useState('');
  const [result, setResult] = useState(null);
  const [testId, setTestId] = useState(null); // Estado para o test_id do exercício

  // Função para lidar com mudanças no código
  const handleEditorChange = (value) => {
    setCode(value);
  };

  // Função para pegar o exercício e o test_id do backend
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await fetch(`http://localhost:8000/exercicios/${exerciseId}`);
        const exercise = await response.json();
        
        // Pegue o test_id associado ao exercício
        if (exercise && exercise.id) {
          setTestId(exercise.id);
        } else {
          console.error("Test ID não encontrado para este exercício");
        }
      } catch (error) {
        console.error("Error ao buscar exercício:", error);
      }
    };

    fetchExercise();
  }, [exerciseId]); // Dependência para recarregar sempre que o exerciseId mudar

  // Função para enviar o código para o backend
  const submitCode = async () => {
    try {
      const response = await fetch("http://localhost:8000/run-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code }), // Enviando o código para o backend
      });

      const result = await response.json();
      setResult(result); // Aqui você pode armazenar o resultado e exibir
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Função para rodar os testes
  const runTests = async () => {
    if (!testId) {
      console.error("Test ID não encontrado.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/run-tests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code, test_id: testId }), // Enviando o código e test_id para o backend
      });

      const result = await response.json();
      setTestResults(result.test_feedback); // Armazenando o feedback dos testes
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Escreva seu código</h2>
      <MonacoEditor
        height="400px"
        language="python"
        value={code}
        onChange={handleEditorChange}
        className="codespace"
        theme="vs-dark"
      />
      <div className="terminal_buttons_div">
        <button onClick={submitCode} className="button">Rodar</button>
        <button onClick={runTests} className="button">Rodar Testes</button>
      </div>
      {result && (
        <div className="results-panel">
          <h3>Terminal</h3>
          <pre className="program-output">{result.output}</pre>
          {result.error && <pre>{result.error}</pre>}
        </div>
      )}
      <div className="results-panel">
        <h3>Resultado dos Testes</h3>
        <pre className="test-feedback">{testResults}</pre>  
      </div>
    </div>
  );
};

export default CodeEditor;
