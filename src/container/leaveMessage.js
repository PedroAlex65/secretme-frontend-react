import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #fdf9fe;
div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px; 

    .criarLink {
    /* Aparência Principal: Cor de destaque e tamanho */
    width: 400px; 
    height: 60px;
    background-color: #6C5CE7; /* Cor roxa principal */
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    text-align: center;
    line-height: 60px; /* Centraliza o texto verticalmente se for um <a> */
    padding: 0 15px; /* Adiciona padding interno */
    transition: background-color 0.2s ease, box-shadow 0.2s ease;

    /* Estilo para garantir que o texto não quebre o layout */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* Adiciona "..." se o texto for muito longo */
    
    /* Efeito ao passar o mouse */
    &:hover {
        background-color: #5d48ca;
    }

    /* OTIMIZAÇÃO CRÍTICA PARA MOBILE */
    @media (max-width: 500px) {
        width: 95%; /* Usa quase toda a largura da tela */
        height: 50px;
        font-size: 14px;
    }
}
h1{
  margin-top: 80px;
font-size:16px;
font-weight: bold;
}
h2{
  font-size: 15px;
  color: #B4B4B4;
}
textarea{
width:300px;
height: 130px;
border-radius: 15px;
border: 3px solid #B4B4B4;
padding-left: 10px; 
  
  /* Mantém o padding nos outros lados, se desejar */
  padding-top: 10px; 
  padding-right: 10px;

&::placeholder {
  color: #B4B4B4;
  font-size: 15px;
  font-weight: bold;
 
}
}

a{
width: 201px;
    height: 46px;
    background-color: #9D00FF;
    color: #fff;
    border-radius: 15px;
    font-size: 16px; 
    font-weight: bold; 
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 8px;
    cursor: pointer;
    
}
}
 `