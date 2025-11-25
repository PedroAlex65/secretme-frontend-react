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
    width: 100%; /* Ocupa toda a largura da UL/Container */
  max-width: 450px; /* Limite a largura para não ficar muito largo em desktops */


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







