import styled from "styled-components";

export const Container = styled.div`
  padding-top: 5%;
  padding-bottom: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  font-family: "GmarketSansMedium";
  background-color: #fbfbfb;
`;

export const WordContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin-top: 20px;
`;

export const Header = styled.h1`
  font-family: "GmarketSansMedium";
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin-top: 20px;
`;
export const Word = styled.h2`
  font-family: "GmarketSansMedium";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  margin-bottom: 20px;
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
`;

export const OptionButton = styled.button<{
  isSelected: boolean;
  isCorrect: boolean | null;
  isCurrent: boolean;
}>`
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-family: "GmarketSansMedium";
  transition: background-color 0.3s, border-color 0.3s;
  width: 100%;

  ${({ isSelected, isCorrect }) =>
    isSelected && (isCorrect ? `border-color: #00EF0A;` : `border-color: red;`)}

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 80%;
`;

export const ModalHeader = styled.h2`
  font-family: "GmarketSansMedium";
  margin-bottom: 10px;
`;

export const ModalBody = styled.p`
  font-family: "GmarketSansMedium";
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
