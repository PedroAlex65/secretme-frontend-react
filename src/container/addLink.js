import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
 
  margin: 0 auto;
  background-color: #fdf9fe;

  @media (max-width: 500px) {
    width: 100%;
    /* Remove as margens laterais no celular, ocupe 100% da tela */
    padding: 0; 
  }

  div {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px; /* Reduzi o gap para 15px para ficarem mais próximos, como na imagem */

@media (max-width: 500px) {
  padding: 1px;
        gap: 15px;
    }

    h1{
      margin-top: 5px;
      font-weight: bold;
      font-size: 35px;

      @media (max-width: 500px) {
          font-size: 28px;
          margin-top: 20px; /* Garante um espaçamento no topo */
      }
    }
    h2{
      font-size: 20px;
      color: #B4B4B4;

      @media (max-width: 500px) {
          font-size: 16px;
          padding: 0 10px; /* Adiciona padding lateral para que o texto não toque as bordas */
          text-align: center;
      }
    }

    button{
       width: 400px;
    height: 60px; 
    border-radius: 15px;
    border: none;
    background-color: #9D00FF;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  
  @media (max-width: 500px) {
          width: 95%;
          height: 50px; /* Diminui um pouco a altura */
          font-size: 14px;
      }
  }






/* Estilo para os Botões/Links de Ação */
a {
  display: flex; 
    
    /* MUDANÇA CRÍTICA: Alinha o conteúdo (ícone + texto) no início do contêiner */
    justify-content: flex-start; 
    
    /* Mantém a centralização vertical */
    align-items: center; 
    
    /* Ajustes de Recuo: Aumenta o padding esquerdo para criar o recuo da margem */
    padding: 0 20px 0 35px; 
    /* Ordem: topo, direita, baixo, esquerda */

    /* SEU CÓDIGO ORIGINAL ABAIXO */
    width: 400px;
    height: 60px; 
    background-color: #B2B2B2;
    border-radius: 15px;
    font-size: 18px; 
    color: #fff; 
    text-decoration: none;
    gap: 15px;
    cursor: pointer;

    @media (max-width: 500px) {
          width: 95%;
          height: 50px; /* Diminui um pouco a altura */
          padding: 0 15px; /* Ajusta o padding lateral para telas menores */
          font-size: 16px;
      }
}

/* Estilo para os Ícones */
a img {
  
    width: 30px;
    height: 30px;
    /* Adiciona um espaçamento à direita do ícone para separá-lo do texto */
    margin-right: 15px; 
}

  }

.copyLink{
  background-color: #9D00FF;
  transition: all 0.1s; /* Transição suave para o clique */
    
}



/* Estilo Hover (Opcional, mas recomendado) */
.copyLink:hover {
  background-color: #7d24b6; 
}

/* Estilo Active (O EFEITO DE CLIQUE) */
.copyLink:active {
  background-color: #6a1b9a; /* Mantém a cor ou escurece levemente */
  /* Remove a sombra para que o botão "afunde" */
  box-shadow: 0 0 0 #54147c;
  /* Move o botão para baixo para simular o pressionamento */
  transform: translateY(5px); 
}
`;

