import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F9FA;
  padding: 20px;
  section{
  display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    min-height: 80vh;
    height: auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    background-color: #FFFFFF;
    overflow: hidden;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); 
  border-radius: 12px; 
  background-color: #FFFFFF; 
    & > * {
    width: 100%;
  }

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  background-color: #FFFFFF;
  overflow: hidden;
@media (max-width: 600px) {
    
    section {
      max-width: 100%;
      width: 100%;
      min-height: auto;
      height: auto;

      border-radius: 10px;
    }
  }
 }
`