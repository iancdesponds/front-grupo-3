import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [testResults, setTestResults] = useState('');
  const [result, setResult] = useState(null);

  // Função para lidar com mudanças no código
  const handleEditorChange = (value) => {
    setCode(value);
  };

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
    try {
      const response = await fetch("http://localhost:8000/run-tests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code }), // Enviando o código para o backend
      });

      const result = await response.json();
      setTestResults(result.test_feedback); // Armazenando o feedback dos testes
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <div className="container">
      <h2>Escreva seu código</h2>
      <MonacoEditor
        height="400px"
        language="python"
        value={code}
        onChange={handleEditorChange}
        className="codespace"
      />
      <div className="terminal_buttons_div">
      <button onClick={submitCode} className="button">Rodar</button>
      <button onClick={runTests} className="button">Rodar Testes</button>
      </div>
      {result && (
        <div className="results-panel">
          <h3>Terminal</h3>
          <pre  className="program-output">{result.output}</pre>
          {result.error && <pre>{result.error}</pre>}
        </div>
      )}
      <div className="results-panel">
      <h3>Resultado dos Testes</h3>
      <pre className="test-feedback">{testResults}</pre>  
      </div>
    </div>
    </>
  );
};

export default CodeEditor;
