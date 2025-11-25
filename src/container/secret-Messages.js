import styled from "styled-components";
export const ContainerFather = styled.div`
  min-height: 100vh; 
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F9FA; 
  padding: 20px;

@media (max-width: 400px) {
    padding: 0; 
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px; 
  width: 90%; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); 
  border-radius: 12px; 
  background-color: #FFFFFF;
    @media (max-width: 500px) {
    width: 95%; 
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 20px; 
    @media (max-width: 500px) {
      padding: 20px 15px;
    }
  }
`;

export const HeaderContainer = styled.header`
  background-color: #6C5CE7; 
  color: #FFFFFF;
  padding: 30px 0; 
  text-align: center;
  font-family: 'Poppins', sans-serif;
  border-top-left-radius: 12px; 
  border-top-right-radius: 12px;

  h1 {
    font-size: 2em;
    font-weight: 700;
    margin: 100px;
    
  }
`;
export const CardWrapper = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0; 
  border: none;
  background: #FFFFFF; 
  padding: 0 20px; 

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px; /
  h1 { 
    color: #343A40;
    font-size: 1.8em; 
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }

  h2 {
    margin-top: 10px;
    color: #6C757D;
    font-size: 0.95em;
    line-height: 1.5;
    text-align: center;
    max-width: 90%; 
  }
  
  .about-information, .allow-notification { 
     color: #6C757D;
     font-size: 0.9em;
     text-align: center;
  }

  .trace { 
    display: none;
  }
`;
export const IputsTexts = styled.form`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
 
  .input-nickName {
    margin-top: 5px;
    width: 90%; 
    max-width: 380px;
    height: 40px;
    padding: 5px 12px; 
    border: 1px solid #CED4DA; 
    border-radius: 8px; 
    box-shadow: none;
    transition: border 0.3s ease;

    &:focus { 
      border-color: #6C5CE7;
      box-shadow: 0 0 0 0.2rem rgba(108, 92, 231, 0.25);
      outline: none;
    }
    @media (max-width: 500px) {
      width: 95%;
    }
  }
  .btn { 
    margin-top: 25px;
    width: 90%;
    max-width: 380px;
    height: 45px;
    background-color: #9D00FF;
    border-radius: 8px; 
    border: none;
    color: #fff;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #7F00FF;
    }
    @media (max-width: 500px) {
      width: 95%;
      font-size: 1em;
    }
  }
`;

export const InputCheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  
  label {
    color: #6C757D; 
    font-size: 0.85em; 
    line-height: 1.4;
    max-width: 350px;
    margin-left: 8px; 
  }
  
  input[type="checkbox"] {
    transform: scale(1.2); 
    accent-color: #6C5CE7; 
  }
`;