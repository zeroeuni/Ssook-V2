import styled from "styled-components";

export const Main_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: "GmarketSansMedium";
`;

export const Main_Layout_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 5%;
  }

  @media (max-width: 480px) {
    padding: 0 2%;
  }
`;

export const Main_Logo_Container = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const Main_Logo = styled.img`
  height: auto;
  width: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 60%;
  }
`;

export const Main_Title = styled.div`
  font-size: 50px;
  color: #5e5f61;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;
