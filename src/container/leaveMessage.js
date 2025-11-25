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
    text-align: center;
    .criarLink {
    /* Anula os estilos de fundo e tamanho herdados do 'a' genérico */
    background-color: transparent; /* Remove o fundo roxo */
    width: auto; /* Permite que o link tenha o tamanho do seu conteúdo */
    height: auto;
    
    /* Aplica os estilos desejados para este link */
    color: #6c5ce7; /* Cor que você definiu inline no JSX */
    text-align: center;
    font-size: 1em; /* Tamanho que você definiu inline no JSX */
    margin-top: 23px;
    cursor: pointer;
    text-decoration: underline; /* Garante que está sublinhado */
    
    /* Remove o display flex para que o texto não fique centralizado como um botão */
    display: inline; /* ou use 'block' se quiser que ele ocupe toda a largura */
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