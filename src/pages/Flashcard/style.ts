import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 93vh;
  width: 100vw;
  font-family: "GmarketSansMedium";
  background-color: #fbfbfb;
  flex-direction: column;
  padding: 50px 16%;

  @media (max-width: 768px) {
    padding: 30px 8%;
  }

  @media (max-width: 480px) {
    padding: 20px 4%;
  }
`;

export const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 0;
  text-align: left;
  margin-left: 7%;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 5%;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-left: 3%;
  }
`;

export const FlashcardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 100px 200px;
  margin-bottom: 30px;
  max-width: 1000px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 auto;
  height: 80%;

  @media (max-width: 768px) {
    padding: 50px 100px;
  }

  @media (max-width: 480px) {
    padding: 30px 50px;
  }
`;

export const Word = styled.span`
  font-size: 68px;
  text-align: center;
  color: #000000;
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Meaning = styled.span`
  font-size: 72px;
  text-align: center;
  color: #000000;
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 52px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

export const Progress = styled.span`
  font-size: 16px;
  color: #96979c;
  text-align: center;
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1px;
  }
`;

export const Button = styled.button`
  padding: 20px 40px;
  font-size: 20px;
  cursor: pointer;
  border: 2px solid #0094ff;
  border-radius: 30px;
  transition: background-color 0.3s;
  font-weight: bold;
  margin-top: 5%;

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

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 15px 30px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const ModalMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HomeButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #0094ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 20px; /* 위쪽 여백 추가 */

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

export const Instruction = styled.p`
  font-size: 16px;
  color: #888;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
