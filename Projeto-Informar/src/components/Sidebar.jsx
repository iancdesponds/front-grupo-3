import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Box
} from '@mui/material';

import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Close as CloseIcon
} from '@mui/icons-material';

import Logo from '../assets/logo.png';

import '../App.css';

export default function Sidebar() {
  // Controla se o Drawer está aberto/fechado
  const [open, setOpen] = useState(true);
  // Controla se o sub-menu da Aula-1 está expandido
  const [openAula1, setOpenAula1] = useState(false);
    // Controla se o sub-menu da Aula-2 está expandido
    const [openAula2, setOpenAula2] = useState(false);
    // Controla se o sub-menu da Aula-3 está expandido
    const [openAula3, setOpenAula3] = useState(false);
    // Controla se o sub-menu da Aula-4 está expandido
    const [openAula4, setOpenAula4] = useState(false);
    // Controla se o sub-menu da Aula-5 está expandido
    const [openAula5, setOpenAula5] = useState(false);
    // Controla se o sub-menu da Aula-6 está expandido
    const [openAula6, setOpenAula6] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleAula1Click = () => {
    setOpenAula1(!openAula1);
  };
    const handleAula2Click = () => {
    setOpenAula2(!openAula2);
    };
    const handleAula3Click = () => {
    setOpenAula3(!openAula3);
    };
    const handleAula4Click = () => {
    setOpenAula4(!openAula4);
    };
    const handleAula5Click = () => {
    setOpenAula5(!openAula5);
    };
    const handleAula6Click = () => {
    setOpenAula6(!openAula6);
    };

  // Largura da sidebar
  const drawerWidth = 300;

  // Estilo para o link ativo (vermelho)
  const activeStyle = {
    color: 'red',
  };

  // Verifica se o pathname atual começa com a rota da aula
  const location = useLocation();
  const isAula1Active = location.pathname.startsWith('/aula-1');
  const isAula2Active = location.pathname.startsWith('/aula-2');
  const isAula3Active = location.pathname.startsWith('/aula-3');
  const isAula4Active = location.pathname.startsWith('/aula-4');
  const isAula5Active = location.pathname.startsWith('/aula-5');
  const isAula6Active = location.pathname.startsWith('/aula-6');

  return (
    <>
    {/** 
       * TOPO FIXO: Logo + Botão 
       * Fica sempre no canto superior esquerdo
       */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100px',
          // Mantém fixo no topo
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          // Aparência do topo
          backgroundColor: '#fff',
          borderBottom: '1px solid #ccc',
          px: 2, // padding horizontal
        }}
      >
        {/* Botão para abrir/fechar */}
        <IconButton onClick={() => setOpen(!open)} sx={{ mr: 1 }}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/* Logo ou título */}
        <Box component={NavLink} to="/">
            <Box
                component="img"
                src={Logo}
                alt="Informar GAS"
                sx={{ height: '80px' }}
            />
        </Box>
        {/* Ou poderia usar um <h1>Informar GAS</h1> ao invés de imagem */}
      </Box>

      {/**
       * DRAWER (sidebar) 
       * Fica "por baixo" do topo fixo, começando em top: 64px
       */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        // Ajusta zIndex para ficar atrás do top bar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer,
          '& .MuiDrawer-paper': {
            // Deixa a sidebar logo abaixo do top bar
            top: '100px',
            // Ajusta a altura para ocupar o resto da tela
            height: 'calc(100% - 100px)',
            // Largura fixa
            width: 300,
            // Se quiser transição suave no abrir/fechar:
            transition: 'transform 0.3s ease-out',
            boxSizing: 'border-box',
            overflowX: 'hidden',
          },
        }}
      >

        {/* Lista de itens do menu */}
        <List>
          {/* HOME */}
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Home" />
            </ListItemButton>
          </ListItem>

          {/* SOBRE */}
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/sobre"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Sobre" />
            </ListItemButton>
          </ListItem>

          {/* AULA-1: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula1Click}
              style={isAula1Active ? activeStyle : {}}
            >
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Aula 1 - Operadores" />
              {openAula1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          {/* Sublista de Aula-1 */}
          <Collapse in={openAula1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-1/inicio"
                  sx={{ pl: 4 }} // indent para destacar subitem
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Início" />
                </ListItemButton>
              </ListItem>

              {/* Operações */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-1/operacoes"
                  sx={{ pl: 4 }}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Operações" />
                </ListItemButton>
              </ListItem>

              {/* Variáveis */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-1/variaveis"
                  sx={{ pl: 4 }} // indent para destacar subitem
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Variáveis" />
                </ListItemButton>
              </ListItem>

              {/* Terminal */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-1/terminal"
                  sx={{ pl: 4 }}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Terminal" />
                </ListItemButton>
              </ListItem>

              {/* Adicione mais subitens se quiser */}
            </List>
          </Collapse>

          {/* AULA-2: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula2Click}
              style={isAula2Active ? activeStyle : {}}
            >
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Aula 2 - Condicionais" />
              {openAula2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          {/* Sublista de Aula-2 */}
          <Collapse in={openAula2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-2/inicio"
                  sx={{ pl: 4 }} // indent para destacar subitem
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Início" />
                </ListItemButton>
              </ListItem>

              {/* Adicione mais subitens se quiser */}
            </List>
          </Collapse>

          {/* AULA-3: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula3Click}
              style={isAula3Active ? activeStyle : {}}
            >
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Aula 3 - Listas" />
              {openAula3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          {/* Sublista de Aula-3 */}
          <Collapse in={openAula3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-3/inicio"
                  sx={{ pl: 4 }} // indent para destacar subitem
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Início" />
                </ListItemButton>
              </ListItem>

              {/* Adicione mais subitens se quiser */}
            </List>
          </Collapse>

          {/* AULA-4: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula4Click}
              style={isAula4Active ? activeStyle : {}}
            >
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Aula 4 - While" />
              {openAula4 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          {/* Sublista de Aula-4 */}
          <Collapse in={openAula4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-4/inicio"
                  sx={{ pl: 4 }} // indent para destacar subitem
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Início" />
                </ListItemButton>
              </ListItem>

              {/* Adicione mais subitens se quiser */}
            </List>
          </Collapse>
          {/* AULA-5: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula5Click}
              style={isAula5Active ? activeStyle : {}}
            >
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Aula 5 - For/Range" />
              {openAula5 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          {/* Sublista de Aula-5 */}
          <Collapse in={openAula5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-5/inicio"
                  sx={{ pl: 4 }} // indent para destacar subitem
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Início" />
                </ListItemButton>
              </ListItem>

              {/* Adicione mais subitens se quiser */}
            </List>
          </Collapse>

          {/* AULA-6: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula6Click}
              style={isAula6Active ? activeStyle : {}}
            >
              <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Aula 6 - Funções" />
              {openAula6 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          {/* Sublista de Aula-6 */}
          <Collapse in={openAula6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-6/inicio"
                  sx={{ pl: 4 }} // indent para destacar subitem
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText primaryTypographyProps={{ fontWeight: 'bold', paddingLeft: '36px', paddingRight: '36px' }} primary="Início" />
                </ListItemButton>
              </ListItem>

              {/* Adicione mais subitens se quiser */}
            </List>
          </Collapse>

          {/* Você pode repetir essa lógica para mais aulas/módulos */}
        </List>
      </Drawer>

      {/* Botão para abrir/fechar a sidebar */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'absolute',
          top: 20,
          // O botão se desloca para a direita quando a sidebar abre
          left: open ? drawerWidth + 10 : 10,
          transition: 'left 0.3s', // animação suave
        }}
      >
        {/* Se estiver aberta, mostra X; senão, mostra o ícone de menu */}
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </>
  );
}
