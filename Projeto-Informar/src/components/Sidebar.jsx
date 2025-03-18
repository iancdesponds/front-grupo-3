import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Close as CloseIcon,
} from "@mui/icons-material";

import Logo from "../assets/Logo_gas.png";
import "../App.css";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [lessons, setLessons] = useState([]); // Armazena as aulas
  const [exercises, setExercises] = useState([]); // Armazena todos os exercícios
  const [expandedLessons, setExpandedLessons] = useState({}); // Estado de expansão de cada aula

  // Busca as aulas no backend
  useEffect(() => {
    fetch("http://localhost:8000/lessons") // Ajuste para o endpoint correto
      .then((res) => res.json())
      .then((data) => {
        setLessons(data);
        // Inicializa os estados das aulas como fechadas
        const initialExpandedState = {};
        data.forEach((lesson) => {
          initialExpandedState[lesson.id] = false;
        });
        setExpandedLessons(initialExpandedState);
      })
      .catch((error) => console.error("Erro ao buscar aulas:", error));
  }, []);

  // Busca todos os exercícios no backend
  useEffect(() => {
    fetch("http://localhost:8000/exercicios") // Ajuste para o endpoint correto
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
      })
      .catch((error) => console.error("Erro ao buscar exercícios:", error));
  }, []);

  // Alterna a expansão de uma aula específica
  const toggleLesson = (lessonId) => {
    setExpandedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  // Estilo do link ativo
  const activeStyle = {
    color: "red",
  };

  return (
    <>
      {/* TOPO FIXO */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#fff",
          borderBottom: "1px solid #ccc",
          px: 2,
        }}
      >
        <IconButton onClick={() => setOpen(!open)} sx={{ mr: 1 }}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/* Logo */}
        <Box component={NavLink} to="/">
          <Box
            component="img"
            src={Logo}
            alt="Informar GAS"
            sx={{ height: "80px" }}
          />
        </Box>
      </Box>

      {/* SIDEBAR */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer,
          "& .MuiDrawer-paper": {
            top: "100px",
            height: "calc(100% - 100px)",
            width: 300,
            transition: "transform 0.3s ease-out",
            boxSizing: "border-box",
            overflowX: "hidden",
          },
        }}
      >
        <List>
          {/* HOME */}
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItemText
                primary="Home"
                primaryTypographyProps={{ fontWeight: "bold", pl: 3, pr: 3 }}
              />
            </ListItemButton>
          </ListItem>

          {/* SOBRE */}
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/sobre"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItemText
                primary="Sobre"
                primaryTypographyProps={{ fontWeight: "bold", pl: 3, pr: 3 }}
              />
            </ListItemButton>
          </ListItem>

          {/* AULAS DINÂMICAS */}
          {lessons.map((lesson) => (
            <React.Fragment key={lesson.id}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => toggleLesson(lesson.id)}>
                  <ListItemText
                    primary={lesson.title}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      pl: 3,
                      pr: 3,
                    }}
                  />
                  {expandedLessons[lesson.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>

              {/* EXERCÍCIOS ASSOCIADOS */}
              <Collapse in={expandedLessons[lesson.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {/* Filtra os exercícios para pegar apenas os da aula atual */}
                  {exercises
                    .filter((exercise) => exercise.lesson_id === lesson.id)
                    .map((exercise) => (
                      <ListItem key={exercise.id} disablePadding>
                        <ListItemButton
                          component={NavLink}
                          to={`/${lesson.title}/${exercise.title}`}
                          sx={{ pl: 4 }}
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                        >
                          <ListItemText
                            primaryTypographyProps={{
                              fontWeight: "bold",
                              pl: 3,
                              pr: 3,
                            }}
                            primary={exercise.title} 
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
}
