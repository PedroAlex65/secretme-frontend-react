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
    background-color: transparent;
    width: auto; 
    height: auto;
    color: #6c5ce7;
    text-align: center;
    font-size: 1em; 
    margin-top: 23px;
    cursor: pointer;
    text-decoration: underline;
    display: inline; 
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

 `