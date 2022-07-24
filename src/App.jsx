import logo from "./assets/logo.svg";
import styled from "styled-components";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

const Container = styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Boton = styled.button`
  margin-top: 3rem;
  text-decoration: none;
  color: #fff;
  background-color: #32a832;
  padding: 1rem;
  width: 50%;
  text-align: center;
  border: 3px solid #000;
  transition: background-color 0.8s;

  &:hover {
    background-color: #1b632e;
  }
`;

function App() {
  const [frase, guardarFrase] = useState({});

  const obtenerCita = async () => {
    const data = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const frase = await data.json();
    guardarFrase(frase[0]);
  };

  useEffect(() => {
    obtenerCita();
  }, [])

  return (
    <Container>
      <img src={logo} alt="breaking bad logo" />
      <Frase frase={frase} />
      <Boton href="#" onClick={obtenerCita}>
        Obtener Cita
      </Boton>
    </Container>
  );
}

export default App;
