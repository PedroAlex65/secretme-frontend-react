import styled from "styled-components";





export const Container = styled.div`


  @media (max-width: 1800px) {
    width: 1050px;
    height: 650px;
  }
  @media (max-width: 1280px) {
    width: 900px;
    height: 700px;
  }
  @media (max-width: 885px) {
    width: 700px;
  }
  @media (max-width: 765px) {
    width: 700px;
    height: 700px;
  }

  @media (max-width: 700px) {
    width: 600px;
    height: 600px;
  }
  @media (max-width: 500px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 394px) {
    width: 380px;
    height: 370px;
  }
  @media (max-width: 370px) {
    width: 350px;
  }

ul {
  margin-top: 20px;
    
    display: flex;
    flex-direction: column;
    gap: 23px;
    align-items: center;
    list-style: none;
    overflow-y: auto;
  }

  
  .fieldMessage {
    
    display: flex;
    align-items: center;
    
   
    justify-content: space-between; 
    
   
    width: 450px;
    min-height: 50px;
    padding: 15px 20px;
    border-radius: 20px;
    background-color: #E3DFFF;
    font-weight: bold;
    box-sizing: border-box;
    color: #4B0082;

    

@media (max-width: 500px) {

  /* 1) Ajusta o container principal no mobile */
  width: 90% !important;
  height: auto !important;
  padding: 0 10px;

  /* 2) UL ocupa toda a largura e evita overflow */
  ul {
    width: 100%;
    padding: 0 5px;
    overflow-x: hidden;
  }

  /* 3) fieldMessage totalmente fluido */
  .fieldMessage {
    width: 100%;
    max-width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 10px;
  }

  /* 4) Ícone ajustado */
  .fieldMessage > img {
    width: 26px;
    height: 26px;
    flex-shrink: 0; /* evita encolher */
  }

  /* 5) Container do texto ocupa todo espaço */
  .container-li {
    flex: 1;
    margin-right: 5px;
  }

  /* 6) Texto quebra linha corretamente */
  .container-li li {
    word-break: break-word;
    white-space: normal;
    overflow-wrap: break-word;
    text-align: left;
  }

  /* 7) Ícone "expandir" fica visível e sem quebrar */
  .imagem-expandir {
    width: 22px;
    height: 22px;
    flex-shrink: 0; /* evita estourar a linha */
  }
}

///////////////////////////
}

  
  .fieldMessage > img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
 
  .container-li {
    
    flex-grow: 1; 
    display: flex; 
    align-items: center; 
    margin-right: 15px; 
  }

 
  .container-li li {
    list-style: none; 
    
    text-align: left; 
  }

  
  .imagem-expandir {
    width: 25px; 
    height: 25px;
    cursor: pointer;
  }

`;







