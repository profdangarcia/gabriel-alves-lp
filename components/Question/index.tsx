import { Button, Flex, Heading } from '@chakra-ui/react';

type Option = {
  id: string;
  text: string;
};

type Props = {
  title: string;
  options: Option[];
  handleSelect: (optionId: string) => void;
};

const Question: React.FC<Props> = ({ title, options = [], handleSelect }) => {
  return (
    <Flex w="100%" direction="column" justify="center" align="center" gap={4}>
      <Heading fontSize="1.2rem" mb={4} textAlign="center" as="h2">
        {title}
      </Heading>
      {options.map(option => (
        <Button
          bg="brand.800"
          w="100%"
          whiteSpace="normal"
          py={8}
          fontSize="1.1rem"
          _hover={{
            bg: 'brand.700',
          }}
          key={option.id}
          onClick={() => handleSelect(option.id)}
        >
          {option.text}
        </Button>
      ))}
    </Flex>
  );
};

export default Question;
