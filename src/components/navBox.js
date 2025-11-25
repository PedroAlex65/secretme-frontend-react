import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #9D00FF;
  border-radius: 10px 10px 0 0;
  height: 70px;
  
  @media (max-width: 500px) {
  height: 50px;
  }

  h3 {
   margin-top: 6px;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
`;
