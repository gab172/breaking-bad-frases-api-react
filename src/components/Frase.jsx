import React from "react";
import styled from "styled-components";

const ContainerFrase = styled.div`
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 2rem;
  border-radius: 20px;
  margin-top: 3rem;
  width: 70%;
  font-weight: 500;
`;

const Frase = ({frase}) => {
  return (
    <ContainerFrase>
      <h1>{frase.quote}</h1>
    </ContainerFrase>
  );
};

export default Frase;
