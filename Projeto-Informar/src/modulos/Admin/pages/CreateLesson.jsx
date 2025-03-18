import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

export default function CreateLesson() {
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");
  const [exerciseQuestion, setExerciseQuestion] = useState("");
  const [exercises, setExercises] = useState([]); // Lista de exercícios adicionados

  // Adiciona um exercício temporariamente à lista
  const addExercise = () => {
    if (exerciseQuestion.trim() === "") return;
    setExercises([...exercises, { id: exercises.length + 1, question: exerciseQuestion }]);
    setExerciseQuestion(""); // Limpa o campo
  };

  // Remove um exercício da lista
  const removeExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  // Envia os dados para a API
  const handleSubmit = async () => {
    if (!lessonTitle.trim() || !lessonDescription.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    const lessonData = {
      title: lessonTitle,
      description: lessonDescription,
      exercises,
    };

    try {
      const response = await fetch("http://localhost:8000/lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lessonData),
      });

      if (response.ok) {
        alert("Aula criada com sucesso!");
        setLessonTitle("");
        setLessonDescription("");
        setExercises([]); // Limpa a lista de exercícios
      } else {
        alert("Erro ao criar aula.");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Criar Nova Aula
      </Typography>

      {/* Título da Aula */}
      <TextField
        label="Título da Aula"
        fullWidth
        value={lessonTitle}
        onChange={(e) => setLessonTitle(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Descrição da Aula */}
      <TextField
        label="Descrição"
        fullWidth
        multiline
        rows={3}
        value={lessonDescription}
        onChange={(e) => setLessonDescription(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Typography variant="h6">Adicionar Exercícios</Typography>

      {/* Campo para adicionar exercícios */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          label="Pergunta do Exercício"
          fullWidth
          value={exerciseQuestion}
          onChange={(e) => setExerciseQuestion(e.target.value)}
        />
        <Button variant="contained" onClick={addExercise}>
          Adicionar
        </Button>
      </Box>

      {/* Lista de exercícios adicionados */}
      {exercises.length > 0 && (
        <List>
          {exercises.map((exercise) => (
            <ListItem
              key={exercise.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => removeExercise(exercise.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={exercise.question} />
            </ListItem>
          ))}
        </List>
      )}

      {/* Botão para salvar a aula */}
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} sx={{ mt: 2 }}>
        Criar Aula
      </Button>
    </Paper>
  );
}
