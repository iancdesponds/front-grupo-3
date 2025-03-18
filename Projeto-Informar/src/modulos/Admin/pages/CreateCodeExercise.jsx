import React, { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react"; // Importando o Monaco Editor

class CreateExercisePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      question: "",
      lesson_id: "", // Alterado para 'lesson_id'
      type: "multiple_choice",
      options: ["", "", "", ""],
      answer: "",
      difficulty: "easy",
      testCode: "",
      releaseDate: "",
      lessons: [], // Lista de aulas disponíveis
    };
  }

  // Carrega as aulas disponíveis do backend
  componentDidMount() {
    fetch("http://localhost:8000/lessons")
      .then((res) => res.json())
      .then((data) => this.setState({ lessons: data }))
      .catch((error) => console.error("Erro ao carregar aulas:", error));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      title,
      question,
      type,
      options,
      answer,
      difficulty,
      testCode,
      releaseDate,
      lesson_id // Alterado para 'lesson_id'
    } = this.state;

    // Monta o objeto de dados de exercício a ser enviado para o backend
    const exerciseData = {
      title,
      question,
      type,
      options:
        type === "multiple_choice"
          ? options.filter((option) => option.trim() !== "")
          : null, // Filtra as opções vazias
      answer: type === "multiple_choice" ? answer : "", // Só envia a resposta se for tipo múltipla escolha
      difficulty,
      test_code: type === "coding" ? testCode : null, // Envia código de teste apenas se for 'coding'
      release_date: releaseDate,
      lesson_id: parseInt(lesson_id), // Garantindo que 'lesson_id' seja um número inteiro
    };

    console.log(exerciseData);
    try {
      const response = await fetch("http://localhost:8000/exercicios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exerciseData), // Envia o JSON corretamente
      });

      if (response.ok) {
        alert("Exercício criado com sucesso!");
      } else {
        alert("Erro ao criar exercício");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  render() {
    const {
      title,
      question,
      type,
      options,
      answer,
      difficulty,
      testCode,
      releaseDate,
      lesson_id,
      lessons,
    } = this.state;

    return (
      <div className="create-exercise-container">
        <h1>Criar Exercício</h1>
        <form className="exercise-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Título</label>
            <textarea
              className="input-field"
              value={title}
              onChange={(e) => this.setState({ title: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Pergunta:</label>
            <textarea
              className="input-field"
              value={question}
              onChange={(e) => this.setState({ question: e.target.value })}
              required
            />
          </div>

          {/* Seleção da Aula */}
          <div className="form-group">
            <label>Aula:</label>
            <select
              className="input-field"
              value={lesson_id} // Alterado para 'lesson_id'
              onChange={(e) => this.setState({ lesson_id: e.target.value })}
            >
              <option value="">Selecione uma Aula</option>
              {lessons.map((lessonItem) => (
                <option key={lessonItem.id} value={lessonItem.id}>
                  {lessonItem.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Tipo:</label>
            <select
              className="input-field"
              value={type}
              onChange={(e) => this.setState({ type: e.target.value })}
            >
              <option value="multiple_choice">Múltipla Escolha</option>
              <option value="coding">Código</option>
            </select>
          </div>

          {type === "multiple_choice" &&
            options.map((option, index) => (
              <div className="form-group" key={index}>
                <input
                  className="input-field"
                  type="text"
                  placeholder={`Opção ${index + 1}`}
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    this.setState({ options: newOptions });
                  }}
                />
              </div>
            ))}

          {/* Mostrar o campo de resposta apenas se o tipo for múltipla escolha */}
          {type === "multiple_choice" && (
            <div className="form-group">
              <label>Resposta correta:</label>
              <input
                className="input-field"
                type="text"
                value={answer}
                onChange={(e) => this.setState({ answer: e.target.value })}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Dificuldade:</label>
            <select
              className="input-field"
              value={difficulty}
              onChange={(e) => this.setState({ difficulty: e.target.value })}
            >
              <option value="easy">Fácil</option>
              <option value="medium">Médio</option>
              <option value="hard">Difícil</option>
            </select>
          </div>

          {type === "coding" && (
            <div className="form-group">
              <label>Código de Teste:</label>
              <MonacoEditor
                className="monaco-editor"
                height="400px"
                language="python"
                value={testCode}
                onChange={(newValue) => this.setState({ testCode: newValue })}
                theme="vs-dark"
                options={{
                  selectOnLineNumbers: true,
                  minimap: { enabled: false },
                }}
              />
            </div>
          )}

          <div className="form-group">
            <label>Data de Liberação:</label>
            <input
              className="input-field"
              type="datetime-local"
              value={releaseDate}
              onChange={(e) => this.setState({ releaseDate: e.target.value })}
              required
            />
          </div>

          <button className="submit-button" type="submit">
            Criar Exercício
          </button>
        </form>
      </div>
    );
  }
}

export default CreateExercisePage;
