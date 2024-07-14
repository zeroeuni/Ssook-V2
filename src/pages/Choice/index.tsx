import React, { useState, useEffect } from "react";
import * as S from "./style";
import words from "../../data/data1";

const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

const getShuffledOptions = (correctMean: string) => {
  const options = words
    .map((word) => word.mean)
    .sort(() => 0.5 - Math.random());

  const selectedOptions = options.slice(0, 4);

  if (!selectedOptions.includes(correctMean)) {
    selectedOptions[getRandomIndex(selectedOptions.length)] = correctMean;
  }

  selectedOptions.sort(() => 0.5 - Math.random());

  return selectedOptions;
};

const Dictation: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(
    getRandomIndex(words.length),
  );
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [usedWords, setUsedWords] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const correctMean = words[currentWordIndex].mean;
    setOptions(getShuffledOptions(correctMean));
    setSelectedOption(null);
    setIsCorrect(null);
  }, [currentWordIndex]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === words[currentWordIndex].mean) {
      setIsCorrect(true);
      setTimeout(() => {
        setUsedWords((prev) => [...prev, currentWordIndex]);
        if (usedWords.length + 1 === words.length) {
          setShowModal(true);
        } else {
          setCurrentWordIndex(getRandomIndex(words.length));
        }
      }, 1000);
    } else {
      setIsCorrect(false);
      setTimeout(() => {
        setSelectedOption(null);
        setIsCorrect(null);
      }, 1000);
    }
  };

  return (
    <S.Container>
      <S.Header>사지선다 영어 단어 학습</S.Header>
      <S.Box>
        <S.Word>{words[currentWordIndex].word}</S.Word>
        <S.Options>
          {options.map((option, index) => (
            <S.OptionButton
              key={index}
              onClick={() => handleOptionClick(option)}
              isSelected={selectedOption === option}
              isCorrect={isCorrect}
              isCurrent={selectedOption === option && isCorrect === null}
            >
              {option}
            </S.OptionButton>
          ))}
        </S.Options>
      </S.Box>
      {showModal && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalHeader>축하합니다!</S.ModalHeader>
            <S.ModalBody>모든 단어를 학습하셨습니다.</S.ModalBody>
            <S.CloseButton onClick={() => setShowModal(false)}>
              닫기
            </S.CloseButton>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};

export default Dictation;
