import styled from "styled-components";

// Paleta: #F8F9FA (Fundo), #6C5CE7 (Principal), #FFFFFF (Card)

// O container pai agora será o fundo da página
export const ContainerFather = styled.div`
  min-height: 100vh; /* Usa 100vh para cobrir a tela toda */
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F9FA; /* Fundo limpo e claro */
  padding: 20px; /* Adiciona padding para telas pequenas */

@media (max-width: 400px) {
    padding: 0; /* Remove padding lateral em telas muito estreitas */
  }

`;

// A antiga 'Container' agora é o Header e o corpo de conteúdo
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px; /* Largura máxima para o card e header */
  width: 90%; /* Ocupa 90% da largura em telas menores */
  
  /* Removemos a borda e usamos a sombra para profundidade */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); 
  border-radius: 12px; /* Borda suave */
  background-color: #FFFFFF; /* Fundo do card, branco */
  
  /* Remove todas as media queries complexas; a nova estrutura é responsiva por padrão */
  @media (max-width: 500px) {
    width: 95%; 
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 20px; /* Espaçamento interno generoso */

    @media (max-width: 500px) {
      padding: 20px 15px;
    }
  }
`;

// Novo Header com a cor de destaque
export const HeaderContainer = styled.header`
  background-color: #6C5CE7; /* Roxo principal */
  color: #FFFFFF;
  padding: 30px 0; /* Espaçamento para o título */
  text-align: center;
  font-family: 'Poppins', sans-serif;
  
  /* Arredonda apenas as bordas superiores do Container pai */
  border-top-left-radius: 12px; 
  border-top-right-radius: 12px;

  h1 {
    font-size: 2em;
    font-weight: 700;
    margin: 100px;
    
  }
`;

// O Card de Input (ContainerUser) agora será o CardWrapper
export const CardWrapper = styled.div`
  width: 100%; /* Ocupa a largura total da seção */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* Remove a borda e a sombra duplicada; o Container já tem o estilo */
  border-radius: 0; 
  border: none;
  background: #FFFFFF; 
  padding: 0 20px; 

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

// Ajuste nos Textos (Agora usando a fonte Poppins - assumindo importação)
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px; /* Espaçamento interno */
  
  h1 { /* Título Principal */
    color: #343A40;
    font-size: 1.8em; 
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }

  h2 { /* Descrição Secundária */
    margin-top: 10px;
    color: #6C757D;
    font-size: 0.95em;
    line-height: 1.5;
    text-align: center;
    max-width: 90%; 
  }
  
  .about-information, .allow-notification { /* Textos de Ajuda */
     color: #6C757D; /* Unifica cor */
     font-size: 0.9em;
     text-align: center;
  }

  .trace { /* Separador */
    display: none; /* Simplificamos o design, removendo o separador */
  }
`;

// Formulário e Inputs
export const IputsTexts = styled.form`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  
  /* Removemos o h2 desnecessário (Descrição "Digite seu Nome") */

  .input-nickName {
    margin-top: 5px;
    width: 90%; /* Usa porcentagem para responsividade */
    max-width: 380px; /* Largura máxima */
    height: 40px; /* Aumenta a altura */
    padding: 5px 12px; 
    border: 1px solid #CED4DA; /* Borda padrão mais sutil */
    border-radius: 8px; /* Borda arredondada */
    box-shadow: none; /* Remove box-shadow agressivo */
    transition: border 0.3s ease;

    &:focus { /* Foco limpo e roxo */
      border-color: #6C5CE7;
      box-shadow: 0 0 0 0.2rem rgba(108, 92, 231, 0.25);
      outline: none;
    }
    
    @media (max-width: 500px) {
      width: 95%;
    }
  }

  .btn { /* Botão Primário */
    margin-top: 25px;
    width: 90%;
    max-width: 380px;
    height: 45px; /* Aumenta a altura */
    background-color: #9D00FF; /* Roxo vibrante */
    border-radius: 8px; 
    border: none;
    color: #fff;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #7F00FF; /* Roxo um pouco mais escuro ao passar o mouse */
    }
    
    @media (max-width: 500px) {
      width: 95%;
      font-size: 1em;
    }
  }
`;

// Checkbox (Ajustado para ser mais discreto)
export const InputCheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  
  label {
    color: #6C757D; /* Cor mais sutil */
    font-size: 0.85em; 
    line-height: 1.4;
    max-width: 350px;
    margin-left: 8px; /* Espaço entre o checkbox e o texto */
  }
  
  input[type="checkbox"] {
    transform: scale(1.2); /* Aumenta um pouco o tamanho do checkbox */
    accent-color: #6C5CE7; /* Muda a cor do 'check' para roxo */
  }
`;