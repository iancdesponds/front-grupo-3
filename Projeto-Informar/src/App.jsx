import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './modulos/Home';
import Sobre from './modulos/Sobre';

// Páginas de Aula-1
import InicioAula1 from './modulos/Aula-1/pages/inicio';
import Variaveis from './modulos/Aula-1/pages/Variaveis';
import Operacoes from './modulos/Aula-1/pages/Operacoes';
import Terminal from './modulos/Aula-1/pages/Terminal';

// Páginas de Aula-2
import InicioAula2 from './modulos/Aula-2/pages/Inicio';
import Condicionais from './modulos/Aula-2/pages/Condicionais';

// Páginas de Aula-3
import InicioAula3 from './modulos/Aula-3/pages/Inicio';

// Páginas de Aula-4
import InicioAula4 from './modulos/Aula-4/pages/inicio';

// Páginas de Aula-5
import InicioAula5 from './modulos/Aula-5/pages/inicio';

// Páginas de Aula-6
import InicioAula6 from './modulos/Aula-6/pages/inicio';
import Funcoes from './modulos/Aula-6/pages/Funcoes'

//Páginas de Exercicios-1
import InicioExercicio1 from './modulos/Exercícios 1/pages/Inicio';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            {/* Rota para Home */}
            <Route path="/" element={<Home />} />

            {/* Rota para Sobre */}
            <Route path="/sobre" element={<Sobre />} />
            
            {/* Rotas de Aula-1 */}
            <Route path="/aula-1/inicio" element={<InicioAula1 />} />
            <Route path="/aula-1/variaveis" element={<Variaveis />} />
            <Route path="/aula-1/operacoes" element={<Operacoes />} />
            <Route path="/aula-1/terminal" element={<Terminal />} />

            {/* Rotas de Aula-2 */}
            <Route path="/aula-2/inicio" element={<InicioAula2 />} />
            <Route path="/aula-2/condicionais" element={<Condicionais />} />
     
            {/* Rotas de Aula-3 */}
            <Route path="/aula-3/inicio" element={<InicioAula3 />} />
        
            {/* Rotas de Aula-4 */}
            <Route path="/aula-4/inicio" element={<InicioAula4 />} />
        
            {/* Rotas de Aula-5 */}
            <Route path="/aula-5/inicio" element={<InicioAula5 />} />
        
            {/* Rotas de Aula-6 */}
            <Route path="/aula-6/inicio" element={<InicioAula6 />} />
            <Route path="/aula-6/funcoes" element={<Funcoes />} />

            {/* Rotas de Exercícios 1*/}
            <Route path="/Exercicio-1/inicio" element={<InicioExercicio1 />} />
        
            {/* Adicione outras rotas conforme precisar */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
