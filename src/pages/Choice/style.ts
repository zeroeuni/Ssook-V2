import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 93vh;
  width: 100vw;
  font-family: "GmarketSansMedium";
  background-color: #fbfbfb;
  flex-direction: column;
  padding: 50px 16%;
`;

export const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 0;
  text-align: left;
  margin-left: 16%;
`;

export const FlashcardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 100px 40px; /* Adjusted padding for better fit */
  margin-bottom: 30px;
  max-width: 1000px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 auto;
  height: 70vh; /* Adjusted height for better fit */
`;

export const Word = styled.span`
  font-size: 72px;
  text-align: center;
  color: #000000;
  margin-top: auto;
`;

export const Meaning = styled.span`
  font-size: 48px; /* Reduced font size for meanings */
  text-align: center;
  color: #000000;
  margin-top: auto;
`;

export const Progress = styled.span`
  font-size: 20px;
  color: #96979c;
  text-align: center;
  margin-top: auto;
`;

export const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

export const ChoiceButton = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border: 2px solid #0094ff;
  border-radius: 30px;
  transition: background-color 0.3s;
  background-color: #fff;
  color: #0094ff;

  &:hover {
    background-color: #0094ff;
    color: #fff;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 20px 40px;
  font-size: 20px;
  cursor: pointer;
  border: 2px solid #0094ff;
  border-radius: 30px;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #0094ff;
    color: #fff;
  }

  &:nth-child(1) {
    background-color: #fff;
    color: #0094ff;
  }

  &:nth-child(2) {
    background-color: #0094ff;
    color: #fff;
  }
`;

export const Instruction = styled.p`
  font-size: 16px;
  color: #888;
  margin-top: 10px;
`;
