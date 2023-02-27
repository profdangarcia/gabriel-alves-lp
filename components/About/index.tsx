import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import config from '../../helpers/config';
import Wrapper from '../Wrapper';

const About: React.FC = () => {
  const { about } = config;
  return (
    <Box w="100%" bg="brand.600" py={4}>
      <Wrapper>
        <Flex
          bg="brand.900"
          w="100%"
          borderRadius={4}
          p={4}
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="center"
          gap={8}
          minH={630}
        >
          <Box>
            <Image
              alt={about.title}
              src={about.image}
              width={328}
              height={636}
            />
          </Box>
          <Flex
            w={{ base: '100%', md: '50%' }}
            direction="column"
            textAlign={{ base: 'center', md: 'right' }}
            gap={4}
          >
            <Heading mb={4} color="brand.800">
              {about.title}
            </Heading>
            {about.description.map(text => (
              <Text key={text}>{text}</Text>
            ))}
          </Flex>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default About;
