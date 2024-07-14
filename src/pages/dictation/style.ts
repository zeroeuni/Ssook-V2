import styled, { css } from "styled-components";

interface CorrectProps {
  isCorrect: boolean | null;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 100vh;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #212529;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Progress = styled.span`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const WordCard = styled.div<CorrectProps>`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin-top: 20px;
  border: ${({ isCorrect }) =>
    isCorrect === null
      ? "none"
      : isCorrect
      ? "2px solid #28a745"
      : "2px solid #dc3545"};

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Word = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #212529;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Input = styled.input<CorrectProps>`
  width: 70%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 50px;
  margin-right: 10px;
  ${({ isCorrect }) =>
    isCorrect === null
      ? css`
          border-color: #ced4da;
        `
      : isCorrect
      ? css`
          border-color: #28a745;
        `
      : css`
          border-color: #dc3545;
        `};

  @media (max-width: 768px) {
    width: 60%;
    padding: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button<CorrectProps>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ isCorrect }) =>
    isCorrect === null
      ? css`
          background-color: #007bff;
          &:hover {
            background-color: #0056b3;
          }
        `
      : css`
          background-color: #007bff;
          &:hover {
            background-color: #0056b3;
          }
        `};

  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;

export const HintContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const HintText = styled.span`
  font-size: 14px;
  color: #6c757d;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const SkipHint = styled.span`
  font-size: 14px;
  color: #6c757d;
  margin-top: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Answer = styled.div<CorrectProps>`
  margin-top: 10px;
  font-size: 18px;
  ${({ isCorrect }) =>
    isCorrect
      ? css`
          color: #28a745;
        `
      : css`
          color: #dc3545;
        `};

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
