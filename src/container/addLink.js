import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 0 auto;
  background-color: #fdf9fe;
  @media (max-width: 500px) {
    width: 100%;
    padding: 0; 
  }
  div {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px; 
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
          margin-top: 20px;
      }
    }
    h2{
      font-size: 20px;
      color: #B4B4B4;
      @media (max-width: 500px) {
          font-size: 16px;
          padding: 0 10px;
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
          height: 50px;
          font-size: 14px;
      }
  }
a {
  display: flex; 
    justify-content: flex-start; 
    align-items: center; 
    padding: 0 20px 0 35px; 
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
          height: 50px; 
          padding: 0 15px; 
          font-size: 16px;
      }
}
a img {
    width: 30px;
    height: 30px;
    margin-right: 15px; 
}
  }
.copyLink{
  background-color: #9D00FF;
  transition: all 0.1s; 
}
.copyLink:hover {
  background-color: #7d24b6; 
}
.copyLink:active {
  background-color: #6a1b9a;
  box-shadow: 0 0 0 #54147c;
  transform: translateY(5px); 
}
`;

