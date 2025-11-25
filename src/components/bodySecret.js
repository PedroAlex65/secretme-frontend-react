import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh; 
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F9FA; 
  padding: 20px;

  @media (max-width: 500px) {
        width: 100%;
        max-width: 100%;
        padding: 0; 
        
    }

  section{
    display: flex;
    flex-direction: column;
    
    max-width: 500px;
    width: 90%; 

    border-radius: 12px; 
    background-color: #FFFFFF; 
    
    
    @media (max-width: 500px) {
      width: 90%; 
      min-height: auto; 
      max-width: 90%;
      border-radius: 12px; 
    }
  }
`