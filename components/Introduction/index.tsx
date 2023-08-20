import { Box, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import config from '../../helpers/config';
import Question from '../Question';
import Wrapper from '../Wrapper';

type Props = {
  setAnswers: (genero: string, tipo: string) => void;
};

const Introduction: React.FC<Props> = ({ setAnswers }) => {
  const { questions } = config;
  const questionsAmount = 3;
  const [genero, setGenero] = useState('');
  const [tipo, setTipo] = useState('');
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleQuestionMark = (optionId: string): void => {
    if (questionNumber === 0) {
      setTipo(optionId);
    }
    if (questionNumber < questionsAmount - 1) {
      setQuestionNumber(questionNumber + 1);
    }
    if (questionNumber === questionsAmount - 1) {
      setAnswers(genero, tipo);
    }
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="brand.900"
      position="fixed"
      top={0}
      left={0}
      zIndex={5000}
    >
      <Wrapper>
        <Flex
          w="100%"
          p={4}
          direction="column"
          justify="center"
          align="center"
          gap={8}
        >
          <Heading textAlign="center" mt={4} color="brand.800">
            Quero te conhecer melhor...
          </Heading>
          {!genero ? (
            <Question
              options={questions.intro.options}
              title={questions.intro.question}
              handleSelect={setGenero}
            />
          ) : (
            <Question
              options={questions[genero][questionNumber].options}
              title={questions[genero][questionNumber].question}
              handleSelect={handleQuestionMark}
            />
          )}
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Introduction;
