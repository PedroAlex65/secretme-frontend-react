import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh; /* Usa 100vh para cobrir a tela toda */
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F9FA; /* Fundo limpo e claro */
  padding: 20px; /* Adiciona padding para telas pequenas */

  section{
     display: flex;
  flex-direction: column;
 width: 500px;
    height: 600px;

  /* Removemos a borda e usamos a sombra para profundidade */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); 
  border-radius: 12px; /* Borda suave */
  background-color: #FFFFFF; /* Fundo do card, branco */
 }
`